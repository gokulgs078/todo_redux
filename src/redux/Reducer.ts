import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions.ts';

export interface Task {
  id: number;
  text: string;
  completed: boolean; 
}

const loadTasksFromLocalStorage = (): Task[] => {
  const savedTasks = localStorage.getItem('todo_tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const initialState: { tasks: Task[] } = {
  tasks: loadTasksFromLocalStorage(),
};

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: string;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number;
}

interface EditTaskAction {
  type: typeof EDIT_TASK;
  payload: { id: number; newText: string };
}

interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number;
}

type TaskActions = AddTaskAction | DeleteTaskAction | EditTaskAction | ToggleTaskAction;

const Reducer = (state = initialState, action: TaskActions) => {
  let updatedTasks;

  switch (action.type) {
    case ADD_TASK:
      updatedTasks = [...state.tasks, { id: Date.now(), text: action.payload, completed: false }];
      localStorage.setItem('todo_tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };

    case DELETE_TASK:
      updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('todo_tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };

    case EDIT_TASK:
      updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
      );
      localStorage.setItem('todo_tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };

    case TOGGLE_TASK:
      updatedTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('todo_tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };

    default:
      return state;
  }
};

export default Reducer;
