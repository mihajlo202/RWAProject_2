import { createSelector } from "@ngrx/store";
import { LoggedUser } from "src/app/models/LoggedUser";
import { AppState } from "..";

export const selectAuthState = (state: AppState) => state.auth;

export const selectLoggedUser = createSelector(
    selectAuthState,
    (auth) => <LoggedUser>auth.user
)