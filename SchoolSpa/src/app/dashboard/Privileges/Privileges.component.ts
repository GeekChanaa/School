import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PrivilegeService } from '../../_services/privilege.service';

@Component({
  selector: 'app-Privileges',
  templateUrl: './Privileges.component.html',
  styleUrls: ['./Privileges.component.sass']
})
export class PrivilegesComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  privileges: any;
  makes: any[] = [];
  
  constructor(private _privilegeService: PrivilegeService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreatePrivilegeDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._privilegeService.getPrivileges()
      .subscribe(data => {
        this.privileges = data;
        this.dataSource = new MatTableDataSource<Group>(this.privileges);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Group
  delete(id: any){
    this._privilegeService.deletePrivilegeById(id)
      .subscribe(() => console.log("privilege deleted"));
  }

  // Creating a privilege
  create(){
    this._privilegeService.createPrivilege(this.model).subscribe(() => {
      console.log("created privilege");
    });
  }

  
}


export interface Group {
  ID: string;
  Title: string;
}


@Component({
  selector: 'create-privilege-dialog',
  templateUrl: 'create-privilege-dialog.html',
})
export class CreatePrivilegeDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _privilegeService: PrivilegeService) {
    
  }
  // Creating a privilege
  create(){
    this._privilegeService.createPrivilege(this.model).subscribe(() => {
      console.log("created privilege");
    });
  }
}