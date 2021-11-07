function LoginPage(){
    return(
        <div className="form-container">
            <h1>Add your new todo!</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" name="todo-title"/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default LoginPage;