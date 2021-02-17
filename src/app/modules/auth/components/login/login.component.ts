import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginRequest } from '../../ngrx/auth.actions';
import { selectAuthError } from '../../ngrx/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: Observable<string>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
    this.loginError = this.store.select(selectAuthError);
  }
  onLogin() {
    this.store.dispatch(loginRequest({authCred: this.loginForm.value}))
  }
}