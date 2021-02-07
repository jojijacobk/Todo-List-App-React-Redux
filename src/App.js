import React, { useState, useEffect } from 'react';
import AddItem from './components/todoList/AddItem.js';
import ListItems from './components/todoList/ListItems.js';
import './App.css';

function App() {
  const STORAGE_KEY = 'todoList';
  const initializeItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const [todoList, setTodoList] = useState(initializeItems);
  const itemAtributes = { STATUS: { ACTIVE: 'active', INACTIVE: 'completed' } };

  const addItemHandler = (newItem) => {
    setTodoList([...todoList, newItem]);
  };

  const markAsDoneHandler = (itemId) => {
    const updatedList = todoList.map((item) => (item.id === itemId ? (item.status = itemAtributes.STATUS.INACTIVE) : true) && item);
    setTodoList(updatedList);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <AddItem addItemHandler={addItemHandler} itemAtributes={itemAtributes} />
      <ListItems todoList={todoList} itemAtributes={itemAtributes} markAsDoneHandler={markAsDoneHandler} />
    </>
  );
}

export default App;
