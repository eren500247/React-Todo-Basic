import React from 'react'
import Todoitem from './Todoitem'
import styles from "./todo.module.css"

function Todolist({todos,settodos}) {
  const sortedTodo = todos.slice().sort((a,b)=> Number(a.done) - Number(b.done));
  function handleDelete(item){
    settodos(todos.filter(e => e !== item))
  }

  function handleComplete(name){
    const newArray = todos.map(i => (
      i.name === name ? {...i,done: !i.done} : i
    ))
    settodos(newArray)
  }
  let numbers = [2,6,3,1].sort((a,b)=> a-b);
  console.log(numbers)
  return (
    <div className={styles.container}>{
        sortedTodo.map((e,index) => (
            <Todoitem key={index} data={e} handleDelete={handleDelete} handleComplete={handleComplete}/>
        ))
    }</div>
  )
}

export default Todolist