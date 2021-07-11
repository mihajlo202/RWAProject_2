import { createAction, props } from "@ngrx/store";
import { LoggedUser } from "src/app/models/LoggedUser";

export const LogIn = createAction(
    '[LogIn Page] LogIn',
    props<{user: LoggedUser}>()
)

export const LogOut = createAction(
    '[LogOut] LogOut',
)