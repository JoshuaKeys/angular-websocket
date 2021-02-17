import { createAction, props } from "@ngrx/store";
import { AuthCredModel } from "../models/auth-cred.model";
import { RegistrationErrorModel } from "../models/registration-error.model";

export const loginRequest = createAction(
    '[LoginComponent] loginRequest',
    props<{authCred: AuthCredModel}>()
);
export const loginSuccess = createAction(
    '[AuthEffects] loginSuccess',
    props<{token: string}>()
);
export const loginFailure = createAction(
    '[AuthEffects] loginFailure',
    props<{err: string}>()
);
export const registrationRequest = createAction(
    '[RegisterComponent] registrationRequest',
    props<{registrationCred: AuthCredModel}>()
);
export const registrationSuccess = createAction(
    '[AuthEffects] registrationSuccess',
    props<{token: string}>()
);
export const registrationFailure = createAction(
    '[AuthEffects] registrationFailure',
    props<{err: RegistrationErrorModel}>()
);
export const loadTokenRequest = createAction(
    '[AppComponent] loadTokenRequest'
);
export const loadTokenSuccess = createAction(
    '[AuthEffects] loadTokenSuccess',
    props<{token: string}>()
);
export const loadTokenFailure = createAction(
    '[AuthEffects] loadTokenFailure'
)