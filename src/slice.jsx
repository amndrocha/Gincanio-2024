import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: JSON.parse(localStorage.getItem('newMessage')) || [],
    pass: localStorage.getItem('pass') || '',
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
        changePass: (state, action) => {
            state.pass = action.payload;
            localStorage.setItem('pass', action.payload);
        }
    }
});

export const { add, remove, changePass } = messageSlice.actions;

export default messageSlice.reducer;
