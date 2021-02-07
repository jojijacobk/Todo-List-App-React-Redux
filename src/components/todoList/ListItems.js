import React from 'react';
import { Segment, Checkbox } from 'semantic-ui-react';

export default function ListItems({ todoList, itemAtributes, markAsDoneHandler }) {
  const checkHandler = (e) => {
    const itemId = e.target.id;
    markAsDoneHandler(itemId);
  };

  const itemsList = todoList
    .filter((item) => item.status === itemAtributes.STATUS.ACTIVE)
    .map((item) => {
      return (
        <Segment key={item.id}>
          <Checkbox id={item.id} onChange={checkHandler} label={item.text}></Checkbox>
        </Segment>
      );
    });

  return <Segment.Group raised>{itemsList}</Segment.Group>;
}
