import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/counter';
import { increase, decrease, setDiff, decreaseAsyncThunk } from '../modules/counter';

function CounterContainer() {
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));
  const onDecreaseAsyncThunk = () => dispatch(decreaseAsyncThunk());
  
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
      onDecreaseAsyncThunk={onDecreaseAsyncThunk}
    />
  );
}

export default CounterContainer;