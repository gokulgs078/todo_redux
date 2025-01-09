export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (text: string) => ({
  type: ADD_TASK,
  payload: text,
});

export const deleteTask = (id: number) => ({
  type: DELETE_TASK,
  payload: id,
});

export const editTask = (id: number, newText: string) => ({
  type: EDIT_TASK,
  payload: { id, newText },
});

export const toggleTask = (id: number) => ({
  type: TOGGLE_TASK,
  payload: id,
});
