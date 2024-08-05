import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'Signup',component:SignupComponent},
   
];
