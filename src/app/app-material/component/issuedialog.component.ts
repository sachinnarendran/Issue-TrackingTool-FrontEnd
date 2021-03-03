import {Component, Inject} from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import { IssueModel } from 'src/app/issue/issue.model';

@Component({
    selector:'issue-dialog',
    templateUrl:'./issuedialog.component.html',
    styleUrls:['./issuedialog.component.css']    
})

export class IssueDialogComponet
{
    constructor(public dialogRef: MatDialogRef<IssueDialogComponet>,
        @Inject(MAT_DIALOG_DATA) public data:IssueModel) 
        {
            console.log(data);
        }

        onNoClick(): void 
        {
            this.dialogRef.close();
        }        
}