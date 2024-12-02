import React, { useState } from 'react';
import ToDoList from './ToDoList'; 
import ToDoForm from './ToDoForm'; 

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
   setTasks((prevTasks) => [...prevTasks, taskText]);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
