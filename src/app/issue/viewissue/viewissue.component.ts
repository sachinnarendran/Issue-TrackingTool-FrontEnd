import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IssueDataSource } from '../issue.source';
import { IssueService } from '../issue.service';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { IssueModel } from '../issue.model';

@Component({
  selector: 'app-viewissue',
  templateUrl: './viewissue.component.html',
  styleUrls: ['./viewissue.component.css']
})
export class ViewissueComponent implements AfterViewInit, OnInit {
displayedColumns :string[] = ["issueTitle","issueDescription","issueStatus","issueAssignee","issueReporter"];
dataSource: IssueDataSource;
issue:IssueModel;
totalCount:number;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.dataSource = new IssueDataSource(this.issueService);
    this.dataSource.loadIssues('','',0,5);
  }
  ngAfterViewInit()
  {
    this.dataSource.paginator = this.paginator;
    this.paginator.page.pipe(tap(() => this.loadIssuesPage())).subscribe();
  }
  loadIssuesPage()
  {
    console.log("Inside View Init");
    this.dataSource.loadIssues('','asc',this.paginator.pageIndex,this.paginator.pageSize);
    this.totalCount = this.dataSource.totalRecordCount;
  }
}

