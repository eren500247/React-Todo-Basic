import React from 'react'
import styles from "./todo.module.css"

function Todoitem({data,handleDelete,handleComplete}) {
  let nameStyle = data.done ? styles.completed : "";
  return (
    // <p>{data}</p>
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span onClick={()=>handleComplete(data.name)} className={nameStyle}
        // style={{
        //   color : data.done ? "green" : "red"
        // }}
        >
        {data.name}
        </span>
        <span>
          <button onClick={()=>handleDelete(data)} className={styles.delbtn}>X</button>
        </span>
      </div>
    </div>
  )
}

export default Todoitem