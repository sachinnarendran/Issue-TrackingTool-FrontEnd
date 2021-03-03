import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppService } from './app.service';
import {CookieService} from 'ngx-cookie-service';
import { AuthService } from './user/auth.service';
import { ViewissueComponent } from './issue/viewissue/viewissue.component';
import { IssueComponent } from './issue/issue.component';
import { CreateissueComponent } from './issue/createissue/createissue.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatPaginatorModule} from '@angular/material/paginator';
import { IssueDialogComponet } from './app-material/component/issuedialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    UserComponent,
    ViewissueComponent,
    IssueComponent,
    CreateissueComponent,
    IssueDialogComponet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    MatPaginatorModule
  ],
  providers: [AppService,CookieService,AuthService],
  bootstrap: [AppComponent],
  entryComponents:[IssueDialogComponet]
})
export class AppModule { }
