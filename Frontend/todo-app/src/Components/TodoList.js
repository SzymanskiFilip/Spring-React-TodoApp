import {useState, useEffect} from "react";
import TodoComponent from "./TodoComponent";

function TodoList(){

    async function getTodos(){
        const res = await fetch("api/v1/todos");
        const json = await res.json();
        console.log(json);
    }



    return(
      <div className="todo-list">
          <TodoComponent title="Train"/>
          <TodoComponent title="Go Shopping"/>
          <TodoComponent title="Study for maths exam"/>
      </div>
    );
}

export default TodoList;