import React from 'react';
import MoveLeft from './components/MoveLeft';
import MoveRight from './components/MoveRight';
// import MoveSelect from './components/MoveSelect';
import Display from './components/Display';
import Preview from './container/Preview';

const layout = {
  display: 'flex',
  justifyContent: 'center',
};

const App = () => (
  <main>
    <div style={layout}>
      <MoveLeft />
      <Display />
      <MoveRight />
    </div>
    <Preview />
  </main>
);

export default App;
