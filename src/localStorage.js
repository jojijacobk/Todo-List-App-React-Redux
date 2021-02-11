const STORAGE_KEY = 'todoList';

export const readStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const writeStorage = (todoList) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
};
