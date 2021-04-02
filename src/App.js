import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'
import AddTask from './components/AddTask';
const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Hello World 1',
      day: 'Feb 01 2011 at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Hello World 2',
      day: 'Feb 01 2011 at 2:30pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Hello World 3',
      day: 'Feb 01 2011 at 2:30pm',
      reminder: true
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, { id, ...task }]);
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toogle Reminder
  const toogleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (

    <div className={'container'}>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks toogleReminder={toogleReminder} deleteTask={deleteTask} tasks={tasks} />
        : 'No Task to show'}
      <Footer />
    </div>
  );
}

export default App;
