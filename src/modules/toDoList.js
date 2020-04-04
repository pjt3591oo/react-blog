const tempItem = {
  id: 1,
  text: '예시',
  done: false
} 
// 초기상태 정의
const initialState = [
  tempItem
];

let nextId = 1;

// Action Type 정의
const TODO_LIST = 'TODO/TODO_LIST';
const TOGGLE_TODO_ITEM = 'TODO/TOGGLE_TODO_ITEM';

// Action Creator Function
export const addTodo = text => ({
  type: TODO_LIST,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text
  }
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO_ITEM,
  id
});

// reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO_LIST:
      return state.concat(action.todo);
    case TOGGLE_TODO_ITEM:
      return state.map(
        todo =>
          todo.id === action.id  
            ? { ...todo, done: !todo.done }
            : todo
      );
    default:
      return state;
  }
}

export default todos