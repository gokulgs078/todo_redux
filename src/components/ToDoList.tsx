import React from 'react';
import { useSelector } from 'react-redux';
import ToDo from './ToDo.tsx';
import { Task } from '../redux/Reducer.ts';

const ToDoList: React.FC = () => {
  const tasks = useSelector((state: { tasks: Task[] }) => state.tasks);

  return (
    <ul className="mt-6 space-y-2">
      {tasks.map((task) => (
        <ToDo
          key={task.id} 
          id={task.id} 
          text={task.text} 
          completed={task.completed} 
        />
      ))}
    </ul>
  );
};

export default ToDoList;
