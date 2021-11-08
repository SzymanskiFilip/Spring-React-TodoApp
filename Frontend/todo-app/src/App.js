import TodoList from "./Components/TodoList";
import AddTodo from './AddTodoPage/AddTodo';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TodoList/>}/>
            <Route path="/add" element={<AddTodo/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
