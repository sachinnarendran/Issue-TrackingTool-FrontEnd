import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createissue',
  templateUrl: './createissue.component.html',
  styleUrls: ['./createissue.component.css']
})
export class CreateissueComponent implements OnInit {
issueForm:FormGroup;
issueForm2:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  
  buildForm()
  {
    this.issueForm = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
    this.issueForm2 = this.fb.group({
      screenshot:['',Validators.required]
    })
  }
}
