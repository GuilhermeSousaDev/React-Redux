import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTodo(state, { payload }) {
            state.tasks.push(payload);
        },
        toggleCompleteTask(state, { payload }) {
            state.tasks.map(task => {
                if (task.id === payload && !task.completed ) {
                    task.completed = true;
                } else if (task.id === payload && task.completed) {
                    task.completed = false;
                }
            });
        },
        removeTodo(state, { payload }) {
            state.tasks = state.tasks.filter(task => task.id !== payload);
        }
    }
});

export const { addTodo, toggleCompleteTask, removeTodo } = todoListSlice.actions;

export const selectTasks = state => state.todo.tasks;

export default todoListSlice.reducer;