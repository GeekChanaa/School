import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.sass']
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['First Name', 'Last Name', 'Email', 'CIN'];
  dataSource :any;
  users: any;
  makes: any[] = [];
  constructor(private http : HttpClient) {
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */

  
  
  ngAfterViewInit() {
    this.users = this.getUsers();
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.users);
    this.dataSource.paginator = this.paginator;
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/user').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error)
    })
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}