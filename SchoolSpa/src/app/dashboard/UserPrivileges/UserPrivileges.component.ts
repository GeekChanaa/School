import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserPrivilegeService } from '../../_services/userPrivilege.service';

@Component({
  selector: 'app-Groups',
  templateUrl: './UserPrivileges.component.html',
  styleUrls: ['./UserPrivileges.component.sass']
})
export class UserPrivilegeComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  userPrivileges: any;
  makes: any[] = [];
  
  constructor(private _userPrivilegeService: UserPrivilegeService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(createUserPrivilegeDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._userPrivilegeService.getUserPrivileges()
      .subscribe(data => {
        this.userPrivileges = data;
        this.dataSource = new MatTableDataSource<UserPrivilege>(this.userPrivileges);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a userPrivilege
  delete(id: any){
    this._userPrivilegeService.deleteUserPrivilegeById(id)
      .subscribe(() => console.log("userPrivilege deleted"));
  }

  // Creating a userPrivilege
  create(){
    this._userPrivilegeService.createUserPrivilege(this.model).subscribe(() => {
      console.log("created userPrivilege");
    });
  }

  
}


export interface UserPrivilege {
  ID: string;
  Title: string;
}


@Component({
  selector: 'create-user-privilege-dialog',
  templateUrl: 'create-user-privilege-dialog.html',
})
export class createUserPrivilegeDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _userPrivilegeService: UserPrivilegeService) {
    
  }
  // Creating a group
  create(){
    this._userPrivilegeService.createUserPrivilege(this.model).subscribe(() => {
      console.log("created group");
    });
  }
}


@Component({
  selector: 'edit-user-privilege-dialog',
  templateUrl: 'edit-user-privilege-dialog.html',
  styleUrls: ['./UserPrivileges.component.sass']
})
export class EditUserPrivilegesDialog {
  model:any ={};
  local_data:any = {};
  userPrivilege:any = {};
  /**
   *
   */
  constructor(private _userPrivilegeService: UserPrivilegeService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._userPrivilegeService.getUserPrivilege(data).subscribe((data) => {
      console.log("got userPrivilege");
      this.userPrivilege = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a userPrivilege
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._userPrivilegeService.editUserPrivilege(this.local_data,this.model).subscribe(() => {
      console.log("Edited userPrivilege");
    });
  }
}