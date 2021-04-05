import React from 'react'
import Task from './Task'




const Tasks = ({ tasks, deleteTask,toogleReminder }) => {

    return (
        <>
            {tasks.map((task,index) => (
                <Task toogleReminder={toogleReminder} deleteTask={deleteTask} key={index} task={task} />
            ))}
        </>
    )
}

export default Tasks
