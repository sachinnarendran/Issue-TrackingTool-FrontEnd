import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-createissue',
  templateUrl: './createissue.component.html',
  styleUrls: ['./createissue.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateissueComponent implements OnInit {
issueForm:FormGroup;
issueForm2:FormGroup;
issueForm3:FormGroup;

// Config for Text Editor
editorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: '15rem',
  minHeight: '5rem',
  placeholder: 'Enter text here...',
  translate: 'no',   
  defaultFontName: 'Arial',
  customClasses: [
    {
      name: "quote",
      class: "quote",
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: "titleText",
      class: "titleText",
      tag: "h1",
    },
  ],
  toolbarPosition:'top'
};

public editor;

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
    this.issueForm3 = this.fb.group({
      editorContent:['',Validators.required]
    })
  }
  
}
