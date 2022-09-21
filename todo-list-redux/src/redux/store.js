import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./TodoList/todoListSlice";

export default configureStore({
    reducer: {
        todo: todoListSlice,
    }
});