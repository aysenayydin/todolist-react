import { useState } from 'react'
import './App.css'
import Task from "./components/Task.jsx"
function App() {
const [tasks,setTasks]=useState([]);
const [todoInput, settodoInput]=useState("")

function handleAddTask(){
  const list=tasks.map((task)=>task)
  list.push(todoInput);
  setTasks(list);

}


  return (
    <>
  <div> 
    <input className="todoInput" type="text" placeholder='Write a task' onChange={(event)=>settodoInput(event.target.value)} />
    <button className='addTask' 
    onClick={handleAddTask}
    >ADD</button>
  </div>

  <ul className='todos'>
{tasks.map((task) =>{
  return <Task todoItem={task}/> 
  })
  }
  


  </ul>
    </>
  )
}

export default App
