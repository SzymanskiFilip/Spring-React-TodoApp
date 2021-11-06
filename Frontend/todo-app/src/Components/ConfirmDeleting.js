function ConfirmDeleting(props){
    return(
        <div className="confirm-prompt">
            <h1>Are you sure you want to delete</h1>
            <h1>{props.title}</h1>

            <div className="buttons-row">
                <button className="btn">Yes</button>
                <button className="btn">Cancel</button>
             </div>
        </div>

    )
}

export default ConfirmDeleting;