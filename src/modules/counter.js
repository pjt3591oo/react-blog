import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
// 초기상태 정의
const initialState = {
  number: 0,
  diff: 1
}

// Action Type 정의
const SET_DIFF = 'COUNTER/SET_DIFF'
const INCREASE = 'COUNTER/INCREASE'
const DECREASE = 'COUNTER/DECREASE'
const INCREASE_ASYNC = 'COUNTER/ASYNC_INCREASE';

// Action Creator Function
export const setDiff = diff => ({
  type: SET_DIFF,
  diff
})
export const increase = () => ({
  type: INCREASE
})
export const sagaIncrease = () => ({
  type: INCREASE_ASYNC
})
export const decrease = () => ({
  type: DECREASE
})

// redux-thunk 테스트
// thunk 함수
// dispatch를 직접호출(reducer 실행) 할 수 있도록 하여 비동기 처리를 할 수 있도록 도와줌
// 비동기 처리시 return 사용이 불가능 하기 때문에
export const decreaseAsyncThunk = () => (dispatch, getState, {history}) => {
  setTimeout(() => {
    dispatch({
      type: DECREASE
    });
  }, 1000);
};


// redux-saga 테스트
function* increaseSaga() {
  console.log(1)
  yield delay(1000);     // 1초를 기다립니다.
  yield put(sagaIncrease()); // put을 이용하여 특정 action distapch
}

// 특정 액션 모니터링
export function* counterSaga() {
  yield takeEvery(INCREASE, increaseSaga); // 모든 INCREASE 액션을 처리
  // yield takeLatest(INCREASE_ASYNC, increaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

// reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case INCREASE_ASYNC:
      return {
        ...state,
        number: 100
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
}

// export default를 의미합니다.
export default counter