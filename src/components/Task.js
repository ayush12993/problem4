import React, { useState, useEffect } from 'react';
import './Todo.css';
function Task({ task, index, completeTask, removeTask }) {
    return (
        
        <div className="task">
            <div className='headerrow11'> 
            <div className='headerrow'>
            <input style={{ width: "20px" }} type="checkbox" onClick={() => completeTask(index)} />
        <div className='task1' style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

         
            
            </div>
            </div>
                 <button className="task" onClick={() => removeTask(index)}>Delete</button>
       
            </div>
        </div>
    );
}

export default Task;