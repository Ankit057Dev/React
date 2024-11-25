import React, {useState} from 'react';
import './index.css'

const  ToDoList=()=>{

  const[tasks,setTasks]= useState(["Wakeup","Do Exercise","Take Shower"]);
  const[newTask, setNewTask] = useState("");

  const handleInputChange=(event)=>{
    setNewTask(event.target.value);
  }

  const addTask=()=>{
    const newTask = document.getElementById("taskInput").value;
    document.getElementById("taskInput").value="";
    
    if(newTask.trim() !== ""){
      setTasks(t=>[...t,newTask]);

    setNewTask("")
  }

  }

  const deleteTask=(index)=>{
    const updatedTasks =tasks.filter((_,i) => i !== index);

    setTasks(updatedTasks);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
}

  const moveTaskUp=(index)=>{
    if(index > 0){

      const updatedTasks =[...tasks];
      [updatedTasks[index],updatedTasks[index - 1]] =[updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);


    }
  }

  const moveTaskDown=(index)=>{

    
    if(index < tasks.length - 1){

      const updatedTasks =[...tasks];
      [updatedTasks[index],updatedTasks[index + 1]] =[updatedTasks[index + 1],updatedTasks[index]];
      setTasks(updatedTasks);
  }
}

return(

<div className="to-do-list">

<h1>To-Do-List </h1>

<div className="input-box">
<input type="text" id="taskInput" className="input" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} onKeyDown={handleKeyPress} />
<button className="add-button"  id="myButton" onClick={addTask}>Add</button>
</div>

<ol className="task-list">

  {tasks.map((task,index)=>
  <li className="list" key={index}>
    <span className="text-list">{task}</span>
    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
    <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
    <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
  </li>
  )}
</ol>
</div>
);

}


export default ToDoList