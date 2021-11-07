import TodoList from "./Components/TodoList";
import LoginPage from './LoginPage/LoginPage';
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TodoList/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
