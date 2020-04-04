import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension'; // Redux Devtools Extension
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
}); // 사가 미들웨어를 만듭니다.

// 스토어 생성
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      // redux-thunk 미들웨어 적용
      // withExtraArgument로 전달된 데잉터는 thunk 함수에서 세 번쨰 인자로 바당서 사용가능
      ReduxThunk.withExtraArgument({ history: customHistory }),    
      // redux-saha 미들웨어를 적용
      sagaMiddleware 
      // 만약 logger를 적용한다면 가장 마지막에 위치해야 함
    )
  )
);

// 루트 사가를 실행해줍니다.
// 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.
sagaMiddleware.run(rootSaga);


console.log('[TRACE] Create App and Store')
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
