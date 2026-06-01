import React, { useState } from 'react'

export default function Todo() {
    const [task,setTask] = useState('')
    const [todolist,setTodolist] = useState([])
    const [id1,setid1] = useState('')
    // const hs = () => {
    //     setTodolist([...todolist,{id : Date.now(),name : task}])
    //     setTask('')
    // }
    const hs = () => {
      if (id1) {
        setTodolist(
          todolist.map((t) => (t.id === id1 ? { ...t, name: task } : t)),
        );
        setid1('');
      } else {
        setTodolist([...todolist, { id: Date.now(), name: task }]);
      }
      setTask("");
    };
    const deleteTask = (id) => {
        setTodolist(todolist.filter((task) => task.id !== id))
    }
    const s1 = (task) => {
      setTask(task.name);
      setid1(task.id);
    };
    console.log(todolist)
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <button onClick={hs}>{id1 ? "Update" : "Add"}</button>

      {todolist.map((t) => (
        <div key={t.id}>
          <h3>{t.name}</h3>
          <button onClick={() => s1(t)}>Edit</button>
          <button onClick={() => deleteTask(t.id)}>Delete</button>
        </div>
      ))}
      {/* <button onClick={hs}>Add</button> */}
      {/* {todolist.map((task) => (
        <div key={task.id}>
            <h3>{task.name}</h3>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            {/* <button onClick={() => }></button>
        </div>
      ))} */}
    </div>
  );
}
