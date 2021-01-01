import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { GroupService } from '../_services/group.service';

@Component({
  selector: 'app-Groups',
  templateUrl: './Groups.component.html',
  styleUrls: ['./Groups.component.sass']
})
export class GroupsComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  groups: any;
  makes: any[] = [];
  
  constructor(private _groupService: GroupService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._groupService.getGroups()
      .subscribe(data => {
        this.groups = data;
        this.dataSource = new MatTableDataSource<Group>(this.groups);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Group
  delete(id: any){
    this._groupService.deleteGroupById(id)
      .subscribe(() => console.log("group deleted"));
  }

  // Creating a group
  create(){
    this._groupService.createGroup(this.model).subscribe(() => {
      console.log("created group");
    });
  }

  
}


export interface Group {
  ID: string;
  Title: string;
}


@Component({
  selector: 'create-group-dialog',
  templateUrl: 'create-group-dialog.html',
})
export class DialogElementsExampleDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _groupService: GroupService) {
    
  }
  // Creating a group
  create(){
    this._groupService.createGroup(this.model).subscribe(() => {
      console.log("created group");
    });
  }
}