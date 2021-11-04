function TodoComponent(props){
    return(
        <div className="todo">
            <input type="checkbox"/>
            <p>{props.title}</p>
        </div>
    );
}

export default TodoComponent;