import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { removeTodo, toggleCompleteTask } from "../redux/TodoList/todoListSlice";

export default function TodoList ({ todo }) {
    const dispatch = useDispatch();

    const [showRemoveTodo, setShowRemoveTodo] = useState(false);

    useEffect(() => addEventListener('contextmenu', e => e.preventDefault()));

    const handleClickFuncionality = useCallback((e, id) => {
        if (e.button === 0) {
            dispatch(toggleCompleteTask(id));
        } else if(e.button === 2) {
            setShowRemoveTodo(true);
        }
    }, []);

    return (
        <div>
            <span className={ todo.completed ? 'completed' : 'incompleted' }>
                <strong onMouseDown={e => handleClickFuncionality(e, todo.id)}>
                    { todo.name }
                </strong> 
                { showRemoveTodo ? 
                        <div>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                        </div> : '' 
                    }
            </span>
        </div>
    )
}