import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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


@Component({
  selector: 'edit-training-dialog',
  templateUrl: 'edit-training-dialog.html',
  styleUrls: ['./Trainings.component.sass']
})
export class EditTrainingDialog {
  model:any ={};
  local_data:any = {};
  training:any = {};
  /**
   *
   */
  constructor(private _trainingService: TrainingService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._trainingService.getTraining(data).subscribe((data) => {
      console.log("got training");
      this.training = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a training
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._trainingService.editTraining(this.local_data,this.model).subscribe(() => {
      console.log("Edited training");
    });
  }
}