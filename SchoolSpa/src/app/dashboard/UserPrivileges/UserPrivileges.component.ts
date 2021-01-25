import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PrivilegeService } from 'src/app/_services/privilege.service';
import { UserService } from 'src/app/_services/user.service';
import { UserPrivilegeService } from '../../_services/userPrivilege.service';

@Component({
  selector: 'app-Groups',
  templateUrl: './UserPrivileges.component.html',
  styleUrls: ['./UserPrivileges.component.sass']
})
export class UserPrivilegeComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','User','Privilege','Actions'];
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
  users: any;
  privileges: any;
  /**
   *
   */
  constructor(private _userPrivilegeService: UserPrivilegeService, private _userService: UserService, private _privilegeService : PrivilegeService) {
    
  }

  ngAfterViewInit(){
    this._privilegeService.getPrivileges()
      .subscribe(data => {
        this.privileges = data;
      });
    this._userService.getUsers()
      .subscribe(data => {
        this.users = data;
      })
  }
  // Creating a User Privilege
  create(){
    this._userPrivilegeService.createUserPrivilege(this.model).subscribe(() => {
      console.log("this is the model I m pushing to the api");
      console.log(this.model);
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