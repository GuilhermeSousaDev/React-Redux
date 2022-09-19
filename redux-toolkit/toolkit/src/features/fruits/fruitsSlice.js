import { createSlice } from "@reduxjs/toolkit";

const fruitsSlice = createSlice({
    name: 'fruits',
    initialState: {
        value: ['apple', 'banana', 'strawberry']
    },
    reducers: {
        addFruit(state, { payload }) {
            state.value.push(payload);
        }
    }
});

export const { addFruit } = fruitsSlice.actions;

export default fruitsSlice.reducer;