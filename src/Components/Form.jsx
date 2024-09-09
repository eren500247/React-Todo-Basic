import React from "react";
import { useState } from "react";
import styles from "./form.module.css"

function Form({todos,setTodos}) {
    const [todo, setTodo] = useState({
      name: "",
      done: false
    });

    function handleSubmit(event) {
        event.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:"",done:false})
    }
  return (
    <form className={styles.todoform}>
      <input
        className={styles.moderninput}
        type="text"
        value={todo.name}
        onChange={(event) => setTodo({...todo,name:event.target.value})}
      />
      <button className={styles.modernbtn} type="submit" onClick={(e) => handleSubmit(e)}>
        Add
      </button>
    </form>
  );
}

export default Form;
