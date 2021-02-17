import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { loadTokenFailure, loadTokenRequest, loadTokenSuccess, loginFailure, loginRequest, loginSuccess, registrationFailure, registrationRequest, registrationSuccess } from "./auth.actions";
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AuthSuccessModel } from "../models/auth-success.model";
import { of } from "rxjs";
import { AuthErrorModel } from "../models/auth-error.model";
import { RegistrationErrorModel } from "../models/registration-error.model";
import { Router } from "@angular/router";
import { createAction } from "@ngrx/store";

@Injectable()
export class AuthEffects {
    loginRequest$ = createEffect(() => this.actions$.pipe(
        ofType(loginRequest),
        mergeMap(action => this.authService.loginUser(action.authCred.email, action.authCred.password).pipe(
            map((success: AuthSuccessModel) => loginSuccess({token: success.token})),
            tap(_ => {
                this.router.navigate(['/', 'chat']) 
             }),
            catchError((err: AuthErrorModel) => {
                console.log(err.error.error);
                return of(loginFailure({err: err.error.error}));
            }))
        )
    ));
    registrationRequest$ = createEffect(() => this.actions$.pipe(
        ofType(registrationRequest),
        mergeMap(({registrationCred: cred}) => this.authService.registerUser(cred.firstName, cred.lastName, cred.email, cred.password).pipe(
            map((success: AuthSuccessModel)=>{
                return registrationSuccess({token: success.token});
            }),
            tap(success => {
                localStorage.setItem('chatToken', success.token);
                this.router.navigate(['/', 'chat']);
            }),
            catchError((err: RegistrationErrorModel) => {
                return of(registrationFailure({err: err}));
            })
        ))
    ));
    loadTokenRequest$ = createEffect(() => this.actions$.pipe(
        ofType(loadTokenRequest),
        tap(x => console.log(x)),
        map(_ => {
            const token = localStorage.getItem('chatToken');
            if(token) {
                return loadTokenSuccess({token});
            }
            return loadTokenFailure();
        })
    ))
    constructor(private actions$: Actions, private authService: AuthService, private router: Router){}
}