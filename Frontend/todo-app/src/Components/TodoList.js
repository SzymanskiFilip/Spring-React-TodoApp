import {useState, useEffect} from "react";
import TodoComponent from "./TodoComponent";
import ConfirmDeleting from "./ConfirmDeleting";
import PromptBackground from "./PromptBackground";

function TodoList(){

    const [todos, setTodos] = useState([]);
    const [promptStatus, setPromptStatus] = useState(false);
    const [deletionId, setDeletionId] = useState();
    const [deletionTitle, setDeletionTitle] = useState("");

    useEffect(() => {
        getTodos();
    },[]);


    async function getTodos(){
        const res = await fetch("api/v1/todos");
        const json = await res.json();
        console.log(json);
        setTodos(json);
    }

    function deleteTodo(id, title){
        setDeletionId(id);
        if(promptStatus == false){
            setPromptStatus(true);
        } else{
            setPromptStatus(false);
        }
        setDeletionId(id);
        setDeletionTitle(title);
    }

    async function executeDeletion(){
        disablePrompt();
        console.log(deletionId);
        console.log(deletionTitle);
        console.log("DELETING... PLEASE WAIT...");
    }

    function disablePrompt(){
        setPromptStatus(false);
    }

    async function updateChecked(status){
        //true = unchecked false = checked
        console.log(`Updating.... current status = ${status}`);
    }

    return(
      <div className="todo-list">
          {
              promptStatus ? <PromptBackground disableFunc={disablePrompt}/> : <></>
          }
          {
              promptStatus ? <ConfirmDeleting title={deletionTitle} cancelFunc={disablePrompt} delete={executeDeletion}/> : <></>
          }

          {
              todos.map((todo) => (
                <TodoComponent title={todo.title}
                               status={todo.status} key={todo.id}
                               id={todo.id} deleteFunc={deleteTodo}
                               updateChecked={updateChecked}/>
              ))
          }
      </div>
    );
}

export default TodoList;