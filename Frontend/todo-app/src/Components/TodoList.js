import {useState, useEffect} from "react";
import TodoComponent from "./TodoComponent";
import ConfirmDeleting from "./ConfirmDeleting";
import PromptBackground from "./PromptBackground";

function TodoList(){

    const [todos, setTodos] = useState([]);
    const [promptStatus, setPromptStatus] = useState(false);

    useEffect(() => {
        getTodos();
    },[]);


    async function getTodos(){
        const res = await fetch("api/v1/todos");
        const json = await res.json();
        console.log(json);
        setTodos(json);
    }

    async function deleteTodo(){
        console.log("pressed")
        if(promptStatus == false){
            setPromptStatus(true);
        } else{
            setPromptStatus(false);
        }
    }

    return(
      <div className="todo-list">
          {
              promptStatus ? <PromptBackground/> : <></>
          }
          {
              promptStatus ? <ConfirmDeleting/> : <></>
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