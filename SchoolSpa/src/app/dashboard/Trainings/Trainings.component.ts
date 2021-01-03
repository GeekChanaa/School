import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TrainingService } from 'src/app/_services/training.service';



@Component({
  selector: 'app-Trainings',
  templateUrl: './Trainings.component.html',
  styleUrls: ['./Trainings.component.sass']
})
export class TrainingsComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  trainings: any;
  makes: any[] = [];
  
  constructor(private _trainingService: TrainingService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateTrainingDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._trainingService.getTrainings()
      .subscribe(data => {
        this.trainings = data;
        this.dataSource = new MatTableDataSource<User>(this.trainings);
        this.dataSource.paginator = this.paginator;
        console.log(this.trainings);
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a User
  delete(id: any){
    this._trainingService.deleteTrainingById(id)
      .subscribe(() => console.log("training deleted"));
  }

  // Creating a training
  create(){
    this._trainingService.createTraining(this.model).subscribe(() => {
      console.log("created training");
    });
  }

  
}


export interface User {
  id: string;
  Title: string;
}


@Component({
  selector: 'create-training-dialog',
  templateUrl: 'create-training-dialog.html',
  styleUrls: ['./Trainings.component.sass']
})
export class CreateTrainingDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _trainingService: TrainingService) {
    
  }
  // Creating a training
  create(){
    this._trainingService.createTraining(this.model).subscribe(() => {
      console.log("created training");
    });
  }
}