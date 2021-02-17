import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateModel } from "../models/auth-state.model";

const authFeat = createFeatureSelector<AuthStateModel>('auth')
export const selectAuthError = createSelector(authFeat, authFeat => authFeat.authError);
export const selectAuthToken = createSelector(authFeat, authFeat => authFeat.authToken)