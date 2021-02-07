import React from 'react';
import { Segment } from 'semantic-ui-react';
import CreateToDO from './components/CreateItem/index.js';

function App() {
  return (
    <Segment>
      <CreateToDO />
    </Segment>
  );
}

export default App;
