import { createReducer, on, Action } from "@ngrx/store";
import { LoggedUser } from "src/app/models/LoggedUser";
import { LogIn, LogOut } from "./auth.actions";

export interface AuthState {
    user: LoggedUser
}

export const initialState: AuthState = {
    user: undefined
}

const reducer = createReducer(
    initialState,
    on(LogIn, (state, {user})=> ({user: user})),
    on(LogOut, (state) => ({user: undefined}))
)

export function authReducer(state: AuthState | undefined, action: Action) {
    return reducer(state, action);
}