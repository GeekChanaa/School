import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-Groups',
  templateUrl: './Groups.component.html',
  styleUrls: ['./Groups.component.sass']
})
export class GroupsComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title'];
  dataSource :any;
  groups: any;
  makes: any[] = [];
  constructor(private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  
  ngAfterViewInit() {
    this.getGroups();
    this.dataSource.paginator = this.paginator;
    this.cdr.detectChanges();
  }
 
  getGroups(){
    console.log("starting inside calling function");
    
    this.http.get('https://localhost:5001/api/group').subscribe(response => {
      this.groups = response;
      this.dataSource = new MatTableDataSource<Group>(this.groups);
    }, error => {
      console.log(error)
    })
  }
}

export interface Group {
  ID: string;
  Title: string;
}