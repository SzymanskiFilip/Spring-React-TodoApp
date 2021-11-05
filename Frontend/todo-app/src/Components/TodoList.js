import {useState, useEffect} from "react";
import TodoComponent from "./TodoComponent";
import ConfirmDeleting from "./ConfirmDeleting";
import PromptBackground from "./PromptBackground";

function TodoList(){

    const [todos, setTodos] = useState([]);

    async function getTodos(){
        const res = await fetch("api/v1/todos");
        const json = await res.json();
        console.log(json);
        setTodos(json);
    }


    useEffect(() => {
        getTodos();
    },[]);

    return(
      <div className="todo-list">
          <PromptBackground/>
          <ConfirmDeleting/>
          {
              todos.map((todo) => (
                <TodoComponent title={todo.title} status={todo.status} key={todo.id} id={todo.id}/>
              ))
          }
      </div>
    );
}

export default TodoList;