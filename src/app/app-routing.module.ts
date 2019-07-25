import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { ViewissueComponent } from './issue/viewissue/viewissue.component';

const routes: Routes = [
  
  {path:'login',component:UserComponent,
  children:[{path:'',component:LoginComponent}]},
  
  {path:'signup',component:UserComponent,
  children:[{path:'',component:SignupComponent}]},

  {path:'issue',component:ViewissueComponent,pathMatch:'full'},

  {path:'', redirectTo:'signup',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
