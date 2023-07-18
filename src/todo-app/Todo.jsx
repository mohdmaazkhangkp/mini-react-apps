import React, { useState } from 'react'
import './Todo.css';

const Todo = () => {
    const [tasks, setTasks] = useState(["maaz", "coding"]);
    const [activity, setActivity] = useState("");
    const handleAdd = ()=>{
        if(activity==="") return;
        setTasks(prev=> [activity, ...prev]);
        setActivity("")
    }
    const removeHandle = (index)=>{
        const newTasks = tasks.filter((_, i) => i !== index);
  setTasks(newTasks);
    }
  return (
    <div className="container">
        <div className="header">
        <h2 className='heading'>To Do List</h2>
        <div className="searchBox">
            <input type='text' placeholder='Add Item' value={activity} onChange={(e)=> setActivity(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
        </div>
        <div className="tasksList">
            {tasks.map((task, index)=>(
                <div className="task">
                    <p>{task}</p>
                    <button className='removeBtn' onClick={()=>removeHandle(index)}>X</button>
                </div>
            ))}
            {tasks.length>1 && <button className='removeAllBtn' onClick={()=>setTasks([])}>Remove All</button>}
        </div>
        
    </div>
    )
}

export default Todo