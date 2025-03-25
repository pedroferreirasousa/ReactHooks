import { BrowserRouter, Route, Routes } from "react-router-dom";

import TodoList from "./pages/todolist";
import ContextAPI from "./pages/contextapi";



const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList/>} />
                <Route path="/contextapi" element={<ContextAPI/>} />
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas; 

