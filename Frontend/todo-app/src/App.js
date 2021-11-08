import TodoList from "./Components/TodoList";
import AddTodo from './LoginPage/AddTodo';
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";

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
