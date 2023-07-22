import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface User {
    email: string;
    password: string;
}

export type ActionType = "login" | "signup";
interface InitialState {
    users: User[];
    email: string;
    password: string;
}

const initialState: InitialState = { users: [], email: "", password: "" };

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
        authenticate: (state, action: PayloadAction<{ data: User, actionType: ActionType }>) => {
            const { data, actionType } = action.payload;
            if (data.email) {
                const userExists = state.users.find(user => user.email === data.email);
                if (userExists) {
                    if (actionType === "login") {
                        if (userExists.password === data.password) {
                            window.alert("Se ha iniciado sesión correctamente");
                        } else {
                            window.alert("Contraseña incorrecta");
                        }
                    } else {
                        window.alert("El correo ya está registrado");
                    }
                } else {
                    if (actionType === "signup") {
                        if (data.password) {
                            state.users.push(data);
                            window.alert("El usuario ha sido registrado correctamente");
                        } else {
                            window.alert("Complete el campo de la contraseña");
                        }
                    } else {
                        window.alert("El correo no está registrado");
                    }
                }
            } else {
                window.alert("Complete el campo de correo");
            }
        },
    },
});

export const { alertState, setEmail, setPassword, authenticate } = registerState.actions;

export default registerState.reducer;
