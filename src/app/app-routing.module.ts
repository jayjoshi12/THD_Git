import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { signupComponent } from './authentication/signup/signup.component';

const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'signup', component:signupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
