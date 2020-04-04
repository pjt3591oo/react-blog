import React from 'react'

const Counter = ({number, diff, onIncrease, onDecrease, onSetDiff, onDecreaseAsyncThunk}) => {
  const onChange = e => {
    // e.target.value => 문자열 타입. + 연산을 위해 숫자타입으로 변경
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <button onClick={onDecreaseAsyncThunk}>s ---</button>
      </div>
    </div>
  );
}

export default Counter