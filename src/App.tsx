import React from 'react';
import AddToDo from './components/AddToDo.tsx';
import ToDoList from './components/ToDoList.tsx';
import './index.css'

const App: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center">ToDo List</h1>
      <AddToDo />
      <ToDoList />
    </div>
  );
};

export default App;
