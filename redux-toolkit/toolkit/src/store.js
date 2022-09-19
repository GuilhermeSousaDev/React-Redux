import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import fruitsSlice from './features/fruits/fruitsSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        fruits: fruitsSlice,
    },
});

export default store;