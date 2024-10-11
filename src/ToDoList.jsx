
import React, {useState} from "react"

function ToDoList(){
    const [tasks, setTasks]=useState([]);
    const [newTasks , setNewTasks]=useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }
    function addTask(){
        if(newTasks.trim()!==""){
        setTasks(t=>[ ...t, newTasks]);
        setNewTasks("");
         }
    }
    function deleteTask(index){
        const updatedTask=tasks.filter((element,newindex)=>newindex !== index);
        setTasks(updatedTask);

    }
    function moveTaskUp(index){
        if(index>0){
        const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index-1]]=
        [updatedTask[index-1],updatedTask[index]];
        setTasks(updatedTask);
    }
    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=
            [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);
        }

    }



return (<div className="to-do-list"> 
<h1>To Do List</h1>
 <div>
    <input type="text" placeholder="Enter task ..." value={newTasks} onChange={handleInputChange}/>
    <button className="add-button" onClick={addTask}>Add Task</button>
 </div>
   <ol>
    {tasks.map((tasks, index)=>
    <li key={index}>
        <span className="text">{tasks}</span>
        <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
        <button className="move-button" onClick={()=>moveTaskUp(index)}>UP</button>
        <button className="move-button" onClick={()=>moveTaskDown(index)}>Down</button>

    </li>
    )}
   </ol>
    </div>);

}
export default ToDoList