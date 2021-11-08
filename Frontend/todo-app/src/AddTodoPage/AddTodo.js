import {useState} from 'react';
import {useNavigate} from "react-router-dom";

function AddTodo(){
    const [todo, setTodo] = useState("");
    const navigate = useNavigate();

    function handleChange(event){
        setTodo(event.target.value);
    }

    async function handleSubmit(){
        console.log(todo);
        const newTodo ={
            title: todo
        };
        fetch("api/v1/todo", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTodo)
        }).then(()=>{
            console.log("Todo added!");
        });
    }

    return(
        <div className="form-container">
            <h1>Add your new todo!</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                navigate("/");
            }}>
                <input type="text" name="todo-title" required onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddTodo;