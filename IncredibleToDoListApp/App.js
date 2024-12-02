import React, { useState } from 'react';
import ToDoList from './ToDoList'; // Assuming ToDoList is in the same directory

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <div>
      <h1>My To-Do List</h1>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;

