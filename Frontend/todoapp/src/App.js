import "./index.css";
import Todo from "./components/Todo.js";
import Confirmation from "./components/Confirmation.js";
function App() {
  return (
    <div>
      <h1 className="title">Todos</h1>
      <div className="container">
        <Todo title="Wash the car" creator="Filip" />
        <Todo title="Eat ice cream" creator="Filip" />
        <Confirmation />
      </div>
    </div>
  );
}

export default App;
