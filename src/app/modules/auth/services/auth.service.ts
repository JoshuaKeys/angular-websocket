import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthErrorModel } from "../models/auth-error.model";
import { AuthSuccessModel } from "../models/auth-success.model";
import { RegistrationErrorModel } from "../models/registration-error.model";

@Injectable()
export class AuthService {
    loginUser(email, password) {
        return this.httpClient.post<AuthSuccessModel | AuthErrorModel >('/api/auth', {
            email, password
        });
    }
    registerUser(firstName, lastName, email, password) {
        return this.httpClient.post<AuthSuccessModel | RegistrationErrorModel> ('/api/users', {
            firstName, lastName, email, password
        });
    }
    constructor(private httpClient: HttpClient){}
}