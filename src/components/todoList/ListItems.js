import React, { useState } from 'react';
import { Segment, Checkbox, Divider, Accordion, Icon, Header } from 'semantic-ui-react';
import store from '../../redux/store.js';
import * as actions from '../../redux/actions.js';

export default function ListItems({ todoList }) {
  let [showCompletedList, setShowCompletedList] = useState(false);

  const toggleItemStatus = (e) => {
    store.dispatch(actions.toggleItemStatus(e.target.id));
  };

  const activeItemsList = todoList
    .filter((item) => item.status === false)
    .map((item) => {
      return (
        <Segment key={item.id}>
          <Checkbox id={item.id} checked={item.status} onChange={toggleItemStatus} label={item.text}></Checkbox>
        </Segment>
      );
    });

  const completedItemsList = todoList
    .filter((item) => item.status === true)
    .map((item) => {
      return (
        <Segment key={item.id}>
          <Checkbox id={item.id} checked={item.status} className="completed" onChange={toggleItemStatus} label={item.text}></Checkbox>
        </Segment>
      );
    });

  return (
    <>
      {[
        todoList.filter((item) => item.status === false).length > 0 && (
          <>
            <Header size="small">Tasks todo</Header>
            <Segment.Group raised>{activeItemsList}</Segment.Group>
            <Divider />
          </>
        ),
        todoList.filter((item) => item.status === true).length > 0 && (
          <Accordion>
            <Accordion.Title active={showCompletedList} onClick={() => setShowCompletedList(!showCompletedList)}>
              <Icon name="dropdown" />
              <Header as="span" size="small">
                Completed tasks
              </Header>
              {/* Completed tasks */}
            </Accordion.Title>
            <Accordion.Content active={showCompletedList}>
              <Segment.Group raised>{completedItemsList}</Segment.Group>
            </Accordion.Content>
          </Accordion>
        ),
      ]}
    </>
  );
}
