import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-createissue',
  templateUrl: './createissue.component.html',
  styleUrls: ['./createissue.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateissueComponent implements OnInit {
  issueForm: FormGroup;
    
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
    toolbarPosition: 'top'
  };

  public editor;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  get formArray(): AbstractControl | null { return this.issueForm.get('issueFormArray'); }

  buildForm() {

    this.issueForm = this._formBuilder.group({
      issueFormArray: this._formBuilder.array([
        this._formBuilder.group({
          title: ['', Validators.required],
          description: ['', Validators.required]
        }),
        this._formBuilder.group({
          screenshot: ['', Validators.required]
        }),
        this._formBuilder.group({
          editorContent: ['']
        })
      ])
    })
  }
  
  createIssue()
  {
    var issueDetails = this.issueForm.get('issueFormArray') as FormArray;
    console.log(issueDetails.at(0).value.title);
    console.log(this.issueForm.controls.title);
    console.log(this.issueForm.value.description);
    console.log(this.issueForm.value.screenshot);
    console.log(this.issueForm.value.editorContent);
    console.log(this.issueForm.value);
    
  }
}
