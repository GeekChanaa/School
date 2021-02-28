import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NewsService } from 'src/app/_services/news.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-New',
  templateUrl: './News.component.html',
  styleUrls: ['./News.component.sass']
})
export class NewComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','startDate','endDate'];
  dataSource :any;
  courseDates: any;
  makes: any[] = [];
  
  constructor(private _userService : UserService ,private _newsService: NewsService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateNewDialog);
  }

  openEditDialog(id:number){
    this.dialog.open(EditNewDialog, {
      data: id,
    });
  }

  ngAfterViewInit() {
    console.log('this is the view init');
    this._newsService.getNewss()
      .subscribe(data => {
        this.courseDates = data;
        this.dataSource = new MatTableDataSource<New>(this.courseDates);
        this.dataSource.paginator = this.paginator;
        console.log(this.courseDates);
      });

    
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a New
  delete(id: any){
    this._newsService.deleteNewsById(id)
      .subscribe(() => console.log("News deleted"));
  }

  
}


export interface New{
  id: number;
  title: string;
  prof: string;
  salle: string;
  trainingID : number;
  moduleID : number;
  subjectID : number;
  description: string;
  startDate : string;
  endDate : string;
  startTime : string;
  endTime : string;
}

@Component({
  selector: 'create-news-dialog',
  templateUrl: 'create-news-dialog.html',
  styleUrls: ['./News.component.sass']
})
export class CreateNewDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _userService : UserService,private _newsService: NewsService) {
    
  }

  ngOnInit(){
  }


  // Creating an New
  create(){
    console.log(this.model);
    this._newsService.createNews(this.model).subscribe(() => {
      console.log("created News");
    });
  }
}




@Component({
  selector: 'edit-news-dialog',
  templateUrl: 'edit-news-dialog.html',
  styleUrls: ['./News.component.sass']
})
export class EditNewDialog {
  model:any ={};
  local_data:any = {};
  courseDate:any = {};
  /**
   *
   */
  constructor(private _newsService: NewsService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._newsService.getNews(data).subscribe((data) => {
      console.log("got news");
      this.courseDate = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a courseDate
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._newsService.editNews(this.local_data,this.model).subscribe(() => {
      console.log("Edited News");
    });
  }
}