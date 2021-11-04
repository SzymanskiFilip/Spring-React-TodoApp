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

    return(
        <div className="todo">
            <input type="checkbox" defaultChecked={status} onChange={handleCheck}/>
            <p className={status ? 'done' : 'undone'}>{props.title}</p>
        </div>
    );
}

export default TodoComponent;