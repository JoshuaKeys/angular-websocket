import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './ngrx/auth.reducer';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './ngrx/auth.effects';

const authRoutes: Routes = [
  {
    path: 'auth', 
    component: AuthHomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      }
    ]
  }
  
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthHomeComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer),
    RouterModule.forChild(authRoutes),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
