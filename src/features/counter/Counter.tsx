import React from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hook'
import { decrement, increment, incrementByAmount } from './counterSlice';




const Counter:React.FC = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector((state) => state.count.value);
    const incrementHandler = () => {
        dispatch(increment());
    }

    const decrementHandler = () => {
        dispatch(decrement());
    }

    const incrementByAmountHandler = () => {
        dispatch(incrementByAmount(5));
    }

  return (
    <div >
        Counter : {value} <br/>
        <button onClick={incrementHandler}>Increment</button> <br />
        <button onClick={decrementHandler}>Decrement</button> <br />
        <button onClick={incrementByAmountHandler}>Increment by 5</button> <br />
    </div>
  )
}

export default Counter