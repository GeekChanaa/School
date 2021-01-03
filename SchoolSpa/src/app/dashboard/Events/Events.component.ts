import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EventService } from '../../_services/event.service';

@Component({
  selector: 'app-Events',
  templateUrl: './Events.component.html',
  styleUrls: ['./Events.component.sass']
})
export class EventsComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Start Date','End Date','Type','Actions'];
  dataSource :any;
  events: any;
  makes: any[] = [];
  
  constructor(private _eventService: EventService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateEventDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._eventService.getEvents()
      .subscribe(data => {
        this.events = data;
        this.dataSource = new MatTableDataSource<Event>(this.events);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Event
  delete(id: any){
    this._eventService.deleteEventById(id)
      .subscribe(() => console.log("event deleted"));
  }

  // Creating a event
  create(){
    this._eventService.createEvent(this.model).subscribe(() => {
      console.log("created event");
    });
  }

  
}


export interface Event {
  ID: number;
  title: string;
  dateStart : string;
  dateEnd : string;
  type : string;
}


@Component({
  selector: 'create-event-dialog',
  templateUrl: 'create-event-dialog.html',
})
export class CreateEventDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _eventService: EventService) {
    
  }
  // Creating a event
  create(){
    this._eventService.createEvent(this.model).subscribe(() => {
      console.log("created event");
    });
  }
}