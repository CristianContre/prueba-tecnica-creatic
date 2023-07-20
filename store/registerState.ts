import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
    email: string;
    password: string;
}

const initialState: InitialState = { email: "", password: "" };

export const registerState = createSlice({
    name: 'register',
    initialState,
    reducers: {
        alertState: (state) => {
            window.alert(`Email: ${state.email}\nPassword: ${state.password}`);
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export const { alertState, setEmail, setPassword } = registerState.actions;

export default registerState.reducer;
