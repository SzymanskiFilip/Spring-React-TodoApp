import {useState} from "react";

function TodoComponent(props){

    const [status, setStatus] = useState(props.status);

    function handleCheck(){
        console.log(status)
        if(status === true){
            setStatus(false);
        } else{
            setStatus(true);
        }
    }

    function showPrompt(id){
        console.log(id);
    }

    return(
            <div className="todo">
                <div className="todo-content">
                    <input type="checkbox" defaultChecked={status} onChange={handleCheck}/>
                    <p className={status ? 'done' : 'undone'}>{props.title}</p>
                </div>
                <p className="delete-btn" onClick={() => showPrompt(props.id)}>
                    delete
                </p>
            </div>
    );
}

export default TodoComponent;