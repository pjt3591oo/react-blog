// 초기상태 정의
const initialState = {
  number: 0,
  diff: 1
}

// Action Type 정의
const SET_DIFF = 'COUNTER/SET_DIFF'
const INCREASE = 'COUNTER/INCREASE'
const DECREASE = 'COUNTER/DECREASE'

// Action Creator Function
export const setDiff = diff => ({
  type: SET_DIFF,
  diff
})
export const increase = () => ({
  type: INCREASE
})
export const decrease = () => ({
  type: DECREASE
})

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