import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions.ts';

interface ToDoProps {
  id: number;
  text: string;
  completed: boolean;
}

const ToDo: React.FC<ToDoProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    dispatch(deleteTask(id));
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation(); 

    if (isEditing && inputRef.current?.value.trim()) {
      dispatch(editTask(id, inputRef.current.value.trim())); 
    }

    setIsEditing(!isEditing); 
  };

  
  const handleToggleCompletion = () => {
    dispatch(toggleTask(id));
  };

  return (
    <li className="flex justify-between items-center p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition duration-300">
      <div className="flex items-center gap-4" onClick={handleToggleCompletion}>
        
        {isEditing ? (
          <input
            type="text"
            defaultValue={text}
            ref={inputRef} 
            className="border border-gray-300 rounded p-1 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus 
          />
        ) : (
          <span className={completed ? 'line-through text-gray-500' : ''}>{text}</span>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className={`py-1 px-3 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 
                      ${isEditing ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={handleDelete}
          className="py-1 px-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDo;
