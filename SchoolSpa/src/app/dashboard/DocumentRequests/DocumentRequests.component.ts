import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModuleService } from 'src/app/_services/module.service';
import { UserService } from 'src/app/_services/user.service';
import { DocumentRequestService } from '../../_services/documentRequest.service';

@Component({
  selector: 'app-DocumentRequests',
  templateUrl: './DocumentRequests.component.html',
  styleUrls: ['./DocumentRequests.component.sass']
})
export class DocumentRequestsComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Training','Type','Actions'];
  dataSource :any;
  documentRequests: any;
  makes: any[] = [];
  
  constructor(private _subjectService: DocumentRequestService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {  
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateDocumentRequestDialog);
  }


  ngAfterViewInit() {
    this._subjectService.getDocumentRequests()
      .subscribe(data => {
        this.documentRequests = data;
        this.dataSource = new MatTableDataSource<Group>(this.documentRequests);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Group
  delete(id: any){
    this._subjectService.deleteDocumentRequestById(id)
      .subscribe(() => console.log("subject deleted"));
  }

  // Creating a subject
  create(){
    this._subjectService.createDocumentRequest(this.model).subscribe(() => {
      console.log("created subject");
    });
  }

  
}


export interface Group {
  ID: string;
  Title: string;
  moduleId: string;
}


@Component({
  selector: 'create-document-request-dialog',
  templateUrl: './create-document-request-dialog.html',
})
export class CreateDocumentRequestDialog {
  model:any ={};
  modules:any;
  teachers:any;

  /**
   *
   */
  constructor(private _moduleService: ModuleService, private _subjectService: DocumentRequestService, private _userService: UserService) {
    
  }

  /**
   *
   */
  ngAfterViewInit() {
    console.log('this is the view init');
    this._moduleService.getModules()
      .subscribe(data => {
        this.modules = data;
      });
    this._userService.getUsers()
      .subscribe((data) => {
        this.teachers = data;
      })
  }

  // Creating a subject
  create(){
    console.log(this.model);
    this._subjectService.createDocumentRequest(this.model).subscribe(() => {
      console.log("created Document Request");
    });
  }
}


@Component({
  selector: 'edit-document-request-dialog',
  templateUrl: './edit-document-request-dialog.html',
  styleUrls: ['./DocumentRequests.component.sass']
})
export class EditDocumentRequestDialog {
  model:any ={};
  local_data:any = {};
  subject:any = {};
  /**
   *
   */
  constructor(private _subjectService: DocumentRequestService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._subjectService.getDocumentRequest(data).subscribe((data : any) => {
      console.log("got subject");
      this.subject = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a subject
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._subjectService.editDocumentRequest(this.local_data,this.model).subscribe(() => {
      console.log("Edited subject");
    });
  }
}