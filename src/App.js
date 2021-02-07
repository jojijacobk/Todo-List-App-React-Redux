import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import AddItem from './components/todoList/AddItem.js';

function App() {
  const STORAGE_KEY = 'todoList';
  const initializeItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const [todoList, setTodoList] = useState(initializeItems);

  const addItemHandler = (newItem) => {
    setTodoList([...todoList, newItem]);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Segment>
      <AddItem addItemHandler={addItemHandler} />
    </Segment>
  );
}

export default App;
