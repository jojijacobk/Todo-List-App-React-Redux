import React, { useState, useEffect } from 'react';
import CreateItem from './components/todoList/CreateItem.js';
import ListItems from './components/todoList/ListItems.js';
import store from './redux/store.js';
import * as actions from './redux/actions.js';
import { writeStorage } from './localStorage.js';
import './App.css';

function App() {
  const initializeItems = store.getState();
  const [todoList, setTodoList] = useState(initializeItems);
  useEffect(() => {
    writeStorage(todoList);
  }, [todoList]);
  const unsubscribeStore = store.subscribe(() => setTodoList(store.getState()));

  const addItemHandler = (newItem) => {
    store.dispatch(actions.addNewItem(newItem.text, newItem.id));
  };

  return (
    <>
      <CreateItem addItemHandler={addItemHandler} />
      <ListItems todoList={todoList} />
    </>
  );
}

export default App;
