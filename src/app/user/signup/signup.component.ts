import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup;
  constructor(private fb:FormBuilder) { }

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

  registerUser(form:FormGroup)
  {
    console.log('name',form.value.email);
    console.log('email:',form.value.name);
    console.log('password',form.value.password);
  }

}
