import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions.ts';

const AddToDo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value.trim();

    if (inputValue) {
      dispatch(addTask(inputValue));
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <form onSubmit={handleAddTask} className="flex gap-2 mt-4">
      <input
        type="text"
        ref={inputRef}
        placeholder="Add a new task"
        className="border border-gray-300 rounded px-4 py-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
