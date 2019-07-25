import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup;
  isSignupSuccess:boolean;
  isSignupFailed : boolean;
  constructor(private fb:FormBuilder,private authService:AuthService,private snackBar:MatSnackBar,private router: Router) { }

  ngOnInit() {
    this.createFormGroup()
  }
  createFormGroup()
  {
    this.signupform = this.fb.group({
      name: ['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/)]]
    });
  }

  registerUser()
  {
    console.log('name',this.signupform.value.name);
    console.log('email:',this.signupform.value.email);
    
    
    let userData = {
        name:this.signupform.value.name,
        email:this.signupform.value.email,
        password:this.signupform.value.password
    }
    this.authService.signup(userData)
    .subscribe((apiResponse) =>{
      if(apiResponse.status === 200)
      {
        this.isSignupSuccess = true;
        this.snackBar.open("Sign Up Success",'undo',{duration:5000});
        setTimeout(()=>{
          this.router.navigate(['/login']);
        })
        
      }
      else if(apiResponse.status === 403)
      {
        this.isSignupSuccess = false;
        this.snackBar.open("User Already Present",'undo',{duration:5000});
      }
      else{
        this.isSignupSuccess = false;
        this.snackBar.open("Unable to Sign Up",'undo',{duration:5000});;
      }
  })
}
}
