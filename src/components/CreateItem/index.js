import React, { useState, useRef, useEffect } from 'react';
import { Segment, Input, Button, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../style.css';

export default function CreateItem() {
  const STORAGE_KEY = 'todoList';
  const initializeItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const [items, setItems] = useState(initializeItems);
  const todoTextRef = useRef('');
  const STATUS = { ACTIVE: 'active', INACTIVE: 'completed' };

  const addItem = () => {
    const inputText = todoTextRef.current.inputRef.current.value;
    todoTextRef.current.inputRef.current.value = '';
    const newItem = { item: inputText, status: STATUS.ACTIVE };
    const itemsList = [...items, newItem];
    setItems(itemsList);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    console.log(localStorage.getItem(STORAGE_KEY));
  }, [items]);

  return (
    <Segment raised>
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column width={15}>
            <Input fluid placeholder="Type your new todo here" ref={todoTextRef} />
          </Grid.Column>
          <Grid.Column width={1}>
            <Button primary className="small right margin" onClick={addItem}>
              Add
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
