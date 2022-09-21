import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import TodoList from "../../components/TodoList";
import { addTodo, selectTasks } from "./todoListSlice";

export default function Todo() {
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    const [taskName, setTaskName] = useState('');

    const handleAddTodo = useCallback(() => {
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;

        const payload = {
            id,
            name: taskName,
            completed: false,
        }

        setTaskName('');
        dispatch(addTodo(payload));
    }, [taskName]);
    
    return (
        <>
            <input 
                type="text" 
                value={taskName}
                onChange={e => setTaskName(e.target.value)} 
            />

            { tasks.map((task, i) => <TodoList key={i} todo={task} />) }

            <button onClick={() => handleAddTodo()}>Add Task</button>
        </>
    )
}