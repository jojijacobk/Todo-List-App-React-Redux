import React, { useRef } from 'react';
import { Segment, Input, Button, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function CreateItem({ addItemHandler, itemAtributes }) {
  const { STATUS } = itemAtributes;
  const todoTextRef = useRef('');

  const newId = () => '_' + Math.random().toString(36).substr(2, 9);

  const addItem = () => {
    const inputText = todoTextRef.current.inputRef.current.value;
    todoTextRef.current.inputRef.current.value = '';
    const newItem = { text: inputText, status: STATUS.ACTIVE, id: newId() };
    addItemHandler(newItem);
  };

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
