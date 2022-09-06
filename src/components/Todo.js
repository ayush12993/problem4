import React, { useState, useEffect } from 'react';
import './Todo.css';
import CreateTask from './CreateTask'
import Task from './Task'



function Todo() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: false
        },
        {
            title: "Do your workout",
            completed: false
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);

    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="headerrow">
            <div className="left">{tasks.length} Tasks </div>
  <div className="right">{tasksRemaining} Remain</div>
                  </div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="headerrow " >
           
            <div className="create-task">
       
                <CreateTask  addTask={addTask} />
                <button  className=' new-bttn task1'>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Todo;