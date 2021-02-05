import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModuleService } from 'src/app/_services/module.service';
import { StudentTrainingService } from 'src/app/_services/studentTraining.service';
import { TrainingService } from 'src/app/_services/training.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-StudentTrainings',
  templateUrl: './StudentTrainings.component.html',
  styleUrls: ['./StudentTrainings.component.sass']
})
export class StudentTrainingsComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Training','Module','Actions'];
  dataSource :any;
  studenttrainings: any;
  makes: any[] = [];
  
  constructor(private _studentTrainingService: StudentTrainingService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateStudentTrainingsDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._studentTrainingService.getStudentTrainings()
      .subscribe(data => {
        this.studenttrainings = data;
        this.dataSource = new MatTableDataSource<StudentTraining>(this.studenttrainings);
        this.dataSource.paginator = this.paginator;
        console.log(this.studenttrainings);
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a StudentTraining
  delete(id: any){
    this._studentTrainingService.deleteStudentTrainingById(id)
      .subscribe(() => console.log("student training deleted"));
  }

  
}


export interface StudentTraining {
  id: string;
  TrainingId : number;
  ModuleId : number;
}


@Component({
  selector: 'create-student-training-dialog',
  templateUrl: 'create-student-training-dialog.html',
  styleUrls: ['./StudentTrainings.component.sass']
})
export class CreateStudentTrainingsDialog {
  model:any ={};
  students:any = {};
  trainings:any;
  /**
   *
   */
  constructor(private _trainingService: TrainingService, private _userService: UserService,private _studentTrainingService : StudentTrainingService) {
    
  }

  ngAfterViewInit() {
    this._trainingService.getTrainings()
      .subscribe(data => {
        this.trainings = data;
      });
    this._userService.getUsers()
      .subscribe(data => {
        this.students = data;
        console.log(this.students)
      });
    
    
    
  }
  // Creating a studenttraining
  create(){
    this._studentTrainingService.createStudentTraining(this.model).subscribe(() => {
      console.log("created training module");
    });
  }
}


@Component({
  selector: 'edit-training-module-dialog',
  templateUrl: 'edit-student-training-dialog.html',
  styleUrls: ['./StudentTrainings.component.sass']
})
export class EditStudentTrainingDialog {
  model:any ={};
  local_data:any = {};
  trainingModule:any = {};
  /**
   *
   */
  constructor(private _studentTrainingService: StudentTrainingService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._studentTrainingService.getStudentTraining(data).subscribe((data) => {
      console.log("got trainingModule");
      this.trainingModule = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a trainingModule
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._studentTrainingService.editStudentTraining(this.local_data,this.model).subscribe(() => {
      console.log("Edited trainingModule");
    });
  }
}