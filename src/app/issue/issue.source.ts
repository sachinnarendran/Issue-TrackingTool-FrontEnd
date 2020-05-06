import { DataSource } from "@angular/cdk/table";
import { IssueModel } from "./issue.model";
import { BehaviorSubject, Observable, of } from "rxjs";
import { IssueService } from "./issue.service";
import { CollectionViewer } from "@angular/cdk/collections";
import { catchError, finalize } from "rxjs/operators";

export class IssueDataSource implements DataSource<IssueModel>
{
    private issueSubject  = new BehaviorSubject<IssueModel[]>([]);
    private loadingSubect = new BehaviorSubject<boolean>(false);

    public loading = this.loadingSubect.asObservable();
    
    constructor(private issueService:IssueService){}

    connect(collectionViewer: CollectionViewer): Observable<IssueModel[]>
    {
        return this.issueSubject.asObservable();
    }

    disconnect(collectionViewer:CollectionViewer): void
    {
        this.issueSubject.complete();
        this.loadingSubect.complete();
    }
    loadIssues(filter:string,sortDirection:string,pageIndex:number,pageSize:number)
    {
        this.loadingSubect.next(true);
        this.issueService.viewLessonsGrid(filter,sortDirection,pageIndex,pageSize)
        .pipe(
        catchError(()=> of([])),
        finalize(()=> this.loadingSubect.next(false))).
        subscribe(issues => this.issueSubject.next(issues));
    }
}