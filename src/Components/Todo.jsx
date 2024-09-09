import React, { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer/Footer";

function Todo() {
  
  const [todos,setTodos] = useState([]);

  const countCompleteTodo = todos.filter(e => e.done === true)
 
  return (
    <>
    <Form todos={todos} setTodos={setTodos} />
    <Todolist todos={todos} settodos={setTodos} />

    <Footer completedTodos={countCompleteTodo.length} totalTodos={todos.length}/>
    </>
  );
}

export default Todo;
