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

    async function deleteTodo(id, title){
        setDeletionId(id);
        if(promptStatus == false){
            setPromptStatus(true);
        } else{
            setPromptStatus(false);
        }
        setDeletionId(id);
        setDeletionTitle(title);
    }

    function disablePrompt(){
        setPromptStatus(false);
    }

    return(
      <div className="todo-list">
          {
              promptStatus ? <PromptBackground disableFunc={disablePrompt}/> : <></>
          }
          {
              promptStatus ? <ConfirmDeleting title={deletionTitle}/> : <></>
          }

          {
              todos.map((todo) => (
                <TodoComponent title={todo.title}
                               status={todo.status} key={todo.id}
                               id={todo.id} deleteFunc={deleteTodo}/>
              ))
          }
      </div>
    );
}

export default TodoList;