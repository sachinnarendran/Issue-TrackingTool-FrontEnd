import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(
    private fb:FormBuilder,
    private  authService:AuthService,
    private router:Router,
    private snackBar:MatSnackBar,
    private cookie:CookieService
  ) { }

  ngOnInit() {
  this.createLoginForm();
  }

  createLoginForm()
  {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  loginUser()
  {

    let loginData = {
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    };
   this.authService.login(loginData)
   .subscribe((apiResponse)=>{
     if(apiResponse.status === 200)
     {
        this.snackBar.open('Logging you in to your Personal Settings','undo',{duration : 2000});
        
        ///Cookie Setting
        this.cookie.set('authToken',apiResponse.data.authToken);
        this.cookie.set('Name',apiResponse.data.userDetails.Name);
        this.cookie.set('userId',apiResponse.data.userId);
        
        this.router.navigate(['/issue']);
     }

     else if(apiResponse.status === 400)
     {
        this.snackBar.open('Wrong Password','undo',{duration:2000});
     }

     else
     {
       this.snackBar.open('No User Details Found. Kindly Register or Check Email is Entered Correctly','undo',{duration:2000});
     }

   }) 
  }
}
