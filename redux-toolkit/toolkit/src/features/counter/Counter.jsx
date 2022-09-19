import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

export default function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Count is: { count }</h1>

            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment By Amount</button>
        </>
    )
}