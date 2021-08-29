function Todo(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h2>{props.creator}</h2>
      <div className="flex">
        <button>delete</button>
      </div>
    </div>
  );
}

export default Todo;
