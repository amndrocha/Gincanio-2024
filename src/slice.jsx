import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: JSON.parse(localStorage.getItem('newMessage')) || [],
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        add: (state, action) => {
            state.message = [... state.message, (action.payload)];
            localStorage.setItem('newMessage', JSON.stringify(state.message));
        },
        remove: (state, action) => {
            const newMessage = state.message.filter(message => message !== action.payload);
            state.message = newMessage;
            localStorage.setItem('newMessage', JSON.stringify(state.message));
        },
    }
});

export const { add, remove } = messageSlice.actions;

export default messageSlice.reducer;
