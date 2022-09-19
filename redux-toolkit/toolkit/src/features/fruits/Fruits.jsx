import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addFruit } from "./fruitsSlice";

export default function Fruits() {
    const fruits = useSelector(state => state.fruits.value);
    const dispatch = useDispatch();

    const [fruit, setFruit] = useState();

    return (
        <>
            <h1>Fruits Store</h1>

            <>{ fruits.map(fruit => ( 
                <div>
                    <span>{ fruit }</span> 
                </div>
            )) }

            <input type="text" onChange={e => setFruit(e.target.value)} />
            <button onClick={() => dispatch(addFruit(fruit))}>Add Fruit</button>
            </>
        </>
    )
};