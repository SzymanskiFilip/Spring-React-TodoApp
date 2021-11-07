import {useState} from "react";

function TodoComponent(props){

    const [status, setStatus] = useState(props.status);

    function handleCheck(){

        if(status == true){
            setStatus(false);
        } else{
            setStatus(true);
        }
        props.updateChecked(props.id, status, props.title);
    }

    function showPrompt(){
        props.deleteFunc(props.id, props.title);
    }

    return(
            <div className="todo">
                <div className="todo-content">
                    <input type="checkbox" defaultChecked={status} onChange={handleCheck}/>
                    <p className={status ? 'done' : 'undone'}>{props.title}</p>
                </div>
                <p className="delete-btn" onClick={() => showPrompt()}>
                    delete
                </p>
            </div>
    );
}

export default TodoComponent;