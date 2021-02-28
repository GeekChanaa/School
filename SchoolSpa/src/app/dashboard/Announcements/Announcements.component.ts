import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModuleService } from 'src/app/_services/module.service';
import { SubjectService } from 'src/app/_services/subject.service';
import { TrainingService } from 'src/app/_services/training.service';
import { UserService } from 'src/app/_services/user.service';
import { AnnouncementService } from '../../_services/announcement.service';

@Component({
  selector: 'app-Announcement',
  templateUrl: './Announcements.component.html',
  styleUrls: ['./Announcements.component.sass']
})
export class AnnouncementComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Date'];
  dataSource :any;
  courseDates: any;
  makes: any[] = [];
  
  constructor(private _userService : UserService ,private _courseDateService: AnnouncementService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateAnnouncementDialog);
  }

  openEditDialog(id:number){
    this.dialog.open(EditAnnouncementDialog, {
      data: id,
    });
  }

  ngAfterViewInit() {
    console.log('this is the view init');
    this._courseDateService.getAnnouncements()
      .subscribe(data => {
        this.courseDates = data;
        this.dataSource = new MatTableDataSource<Announcement>(this.courseDates);
        this.dataSource.paginator = this.paginator;
        console.log(this.courseDates);
      });

    
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Announcement
  delete(id: any){
    this._courseDateService.deleteAnnouncementById(id)
      .subscribe(() => console.log("Announcement deleted"));
  }

  
}


export interface Announcement{
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
  selector: 'create-course-date-dialog',
  templateUrl: 'create-announcements-dialog.html',
  styleUrls: ['./Announcements.component.sass']
})
export class CreateAnnouncementDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _userService : UserService,private _announcementService: AnnouncementService) {
    
  }

  ngOnInit(){
  }


  // Creating an Announcement
  create(){
    console.log(this.model);
    this._announcementService.createAnnouncement(this.model).subscribe(() => {
      console.log("created announcement");
    });
  }
}




@Component({
  selector: 'edit-course-date-dialog',
  templateUrl: 'edit-announcements-dialog.html',
  styleUrls: ['./Announcements.component.sass']
})
export class EditAnnouncementDialog {
  model:any ={};
  local_data:any = {};
  courseDate:any = {};
  /**
   *
   */
  constructor(private _courseDateService: AnnouncementService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._courseDateService.getAnnouncement(data).subscribe((data) => {
      console.log("got courseDate");
      this.courseDate = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a courseDate
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._courseDateService.editAnnouncement(this.local_data,this.model).subscribe(() => {
      console.log("Edited courseDate");
    });
  }
}