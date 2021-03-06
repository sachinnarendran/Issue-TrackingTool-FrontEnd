import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports:[
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class AppMaterialModule { }
