import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { AuthStateModel } from "../models/auth-state.model";
import { loadTokenSuccess, loginFailure, loginSuccess, registrationSuccess } from "./auth.actions";

let initialState: AuthStateModel = {
}
const _authReducer = createReducer(initialState, 
    on(loginFailure, (state, action)=> {
        return {
            ...state,
            authError: action.err
        }
    }),
    on(loginSuccess, registrationSuccess, loadTokenSuccess, (state, action)=> {
        return {
            ...state,
            authToken: action.token
        }
    })
);

export function authReducer(state, action) {
    return _authReducer(state, action);
}