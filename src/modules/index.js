import { combineReducers } from 'redux'
import counter, {counterSaga} from './counter'
import todos from './toDoList'
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter, todos
})

// all 은 배열 안의 여러 사가를 동시에 실행
// Promise.all()과 유사
export function* rootSaga() {
  yield all([counterSaga()]); 
}

export default rootReducer