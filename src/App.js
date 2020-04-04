import React from 'react';
import CounterContainer from './containers/counter';
import TodosContainer from './containers/toDoList';

import ConnectCounterContainer from './containers/connectCounter';
import ConnectTodosContainer from './containers/connectToDoList';

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

      <div>
        <h2>class 형태에서 사용하는 connect</h2>
        <ConnectCounterContainer />
        <ConnectTodosContainer />
      </div>
    </div>
  );
}

export default App;