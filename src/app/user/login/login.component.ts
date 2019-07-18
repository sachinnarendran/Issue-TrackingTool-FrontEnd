import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder) { }

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

  loginUser(loginForm:FormGroup)
  {
    console.log(loginForm.value.email);
    console.log(loginForm.value.password);
  }


}
