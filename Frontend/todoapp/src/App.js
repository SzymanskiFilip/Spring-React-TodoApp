import "./index.css";
import Todo from "./components/Todo.js";

function App() {
  fetch("http://localhost:8080/todos")
    .then((response) => response.json())
    .then((data) => {
      for (let x in data) {
        console.log(x);
      }
    });

  return (
    <div>
      <h1 className="title">Todos</h1>
      <div className="container">
        <Todo title="Wash the car" creator="Filip" />
        <Todo title="Eat ice cream" creator="Filip" />
      </div>
    </div>
  );
}

export default App;
