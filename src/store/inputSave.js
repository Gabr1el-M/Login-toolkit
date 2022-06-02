import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'Email',
    initialState: {
        email: '',
        senha: ''
    },
    reducers: {
        save(state, action) {
            state.email = action.payload.email;
            state.senha = action.payload.senha;
        }
    }
})

export const { save } = slice.actions;
export default slice.reducer;