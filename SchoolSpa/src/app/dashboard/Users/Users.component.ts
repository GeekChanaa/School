import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.sass']
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','CIN','CNE','FirstName','LastName','Email','Actions'];
  dataSource :any;
  users: any;
  makes: any[] = [];
  
  constructor(private _userService: UserService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateUserDialog);
  }

  openEditDialog(id:number){
    this.dialog.open(EditUserDialog, {
      data: id,
    });
  }

  ngAfterViewInit() {
    console.log('this is the view init');
    this._userService.getUsers()
      .subscribe(data => {
        this.users = data;
        this.dataSource = new MatTableDataSource<User>(this.users);
        this.dataSource.paginator = this.paginator;
        console.log(this.users);
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a User
  delete(id: any){
    this._userService.deleteUserById(id)
      .subscribe(() => console.log("user deleted"));
  }

  // Creating a user
  create(){
    this._userService.createUser(this.model).subscribe(() => {
      console.log("created user");
    });
  }

  
}


export interface User {
  id: string;
  Title: string;
}


@Component({
  selector: 'create-user-dialog',
  templateUrl: 'create-user-dialog.html',
  styleUrls: ['./Users.component.sass']
})
export class CreateUserDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _userService: UserService) {
    
  }
  // Creating a user
  create(){
    this._userService.createUser(this.model).subscribe(() => {
      console.log("created user");
    });
  }
}




@Component({
  selector: 'edit-user-dialog',
  templateUrl: 'edit-user-dialog.html',
  styleUrls: ['./Users.component.sass']
})
export class EditUserDialog {
  model:any ={};
  local_data:any = {};
  user:any = {};
  /**
   *
   */
  constructor(private _userService: UserService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._userService.getUser(data).subscribe((data) => {
      console.log("got user");
      this.user = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a user
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._userService.editUser(this.local_data,this.model).subscribe(() => {
      console.log("Edited user");
    });
  }
}