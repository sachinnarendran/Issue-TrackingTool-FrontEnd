import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { IssueModel } from './issue.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private appService:AppService) 
  { }

  //The above mention method accepts 5 parameters
  //filter for filtering, sortorder for Sotring
  // Page Number will be 0 by default, Page Size to display grid with Respective Counts
  viewLessonsGrid(filter = '',sortOrder = 'asc',pageNumber = 0 ,pageSize = 3):Observable<IssueModel[]>
  {
    let params = new HttpParams()
    .set('filter',filter)
    .set('sortOrder',sortOrder)
    .set('pageNumber',pageNumber.toString())
    .set('pageSize',pageSize.toString());
    return this.appService.get("issue/viewAllIssue", params);
  }
}
