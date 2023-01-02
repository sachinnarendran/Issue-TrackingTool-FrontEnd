import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {ActivatedRoute} from '@angular/router';
import { IssueService } from '../issue.service';
import { IssueModel } from '../issue.model';
import{map} from 'rxjs/operators';

@Component({
  selector: 'app-createissue',
  templateUrl: './createissue.component.html',
  styleUrls: ['./createissue.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateissueComponent implements OnInit {
  issueForm: FormGroup;
  issueEditObject:IssueModel;
  newEditObject:IssueModel;
   issueDetails; 
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

  constructor(private _formBuilder: FormBuilder,public router:ActivatedRoute,private issueService:IssueService) { }

  ngOnInit() {
    
   this.newEditObject =  this.getIssueDetails();
    this.buildForm(this.newEditObject);
    
  }
  get formArray(): AbstractControl | null { return this.issueForm.get('issueFormArray'); }

  buildForm(issueDetails) {
    console.log(issueDetails);
    if(this.issueDetails.issueId)
    {
    this.editIssue();  
      
    }
    else
    {
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
  }

  getIssueDetails():IssueModel
  {
    let issueId;
    this.router.paramMap.subscribe(params =>{
          issueId = params.get('id');
          if(issueId)
          {
            console.log(issueId);         
          }
    })
    this.issueDetails =  this.getIssue(issueId);
    return this.issueDetails;
  }

  async getIssue(issueId)
  {
      let result = await this.issueService.getIssueDetails(issueId).toPromise();
      this.issueEditObject = result.data;
      console.log(this.issueEditObject);
      return this.issueEditObject;
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

  editIssue()
  {
  this.issueForm.get('title').patchValue(this.issueEditObject.issueTitle);
  this.issueForm.get('description').patchValue(this.issueEditObject.issueDescription);
  }
}
