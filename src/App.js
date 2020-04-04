import React from 'react';
import CounterContainer from './containers/counter';
import TodosContainer from './containers/toDoList';


function App() {
  return (
    <div>
      <div>
        <h2>hooks 형태</h2>
        <CounterContainer />
        <br />
        <br />
        <br />
        <br />
        <TodosContainer />
      </div>
    </div>
  );
}

export default App;