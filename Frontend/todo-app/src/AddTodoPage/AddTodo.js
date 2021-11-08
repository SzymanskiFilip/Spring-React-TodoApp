import {useState} from 'react';

function AddTodo(){
    const [todo, setTodo] = useState("");

    function handleChange(event){
        setTodo(event.target.value);
    }

    function handleSubmit(){
        console.log(todo);
    }


    return(
        <div className="form-container">
            <h1>Add your new todo!</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <input type="text" name="todo-title" onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddTodo;