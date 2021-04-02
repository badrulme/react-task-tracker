import React from 'react'
import Task from './Task'




const Tasks = ({ tasks, deleteTask,toogleReminder }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task toogleReminder={toogleReminder} deleteTask={deleteTask} key={task.id} task={task} />
            ))}
        </>
    )
}

export default Tasks
