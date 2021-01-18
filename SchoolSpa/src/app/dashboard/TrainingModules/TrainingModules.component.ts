import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModuleService } from 'src/app/_services/module.service';
import { TrainingService } from 'src/app/_services/training.service';
import { TrainingModuleService } from 'src/app/_services/trainingModule.service';

@Component({
  selector: 'app-TrainingModules',
  templateUrl: './TrainingModules.component.html',
  styleUrls: ['./TrainingModules.component.sass']
})
export class TrainingModulesComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Training','Module','Actions'];
  dataSource :any;
  trainingmodules: any;
  makes: any[] = [];
  
  constructor(private _trainingModuleService: TrainingModuleService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateTrainingModulesDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._trainingModuleService.getTrainingModules()
      .subscribe(data => {
        this.trainingmodules = data;
        this.dataSource = new MatTableDataSource<TrainingModule>(this.trainingmodules);
        this.dataSource.paginator = this.paginator;
        console.log(this.trainingmodules);
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a TrainingModule
  delete(id: any){
    this._trainingModuleService.deleteTrainingModuleById(id)
      .subscribe(() => console.log("trainingmodule deleted"));
  }

  
}


export interface TrainingModule {
  id: string;
  TrainingId : number;
  ModuleId : number;
}


@Component({
  selector: 'create-training-module-dialog',
  templateUrl: 'create-training-module-dialog.html',
  styleUrls: ['./TrainingModules.component.sass']
})
export class CreateTrainingModulesDialog {
  model:any ={};
  modules:any;
  trainings:any;
  /**
   *
   */
  constructor(private _trainingService: TrainingService, private _moduleService: ModuleService,private _trainingModuleService : TrainingModuleService) {
    
  }

  ngAfterViewInit() {
    console.log('this is the view init');
    this._trainingService.getTrainings()
      .subscribe(data => {
        this.trainings = data;
      });
    this._moduleService.getModules()
      .subscribe(data => {
        this.modules = data;
      });
    
  }
  // Creating a trainingmodule
  create(){
    this._trainingModuleService.createTrainingModule(this.model).subscribe(() => {
      console.log("created training module");
    });
  }
}


@Component({
  selector: 'edit-training-module-dialog',
  templateUrl: 'edit-training-module-dialog.html',
  styleUrls: ['./TrainingModules.component.sass']
})
export class EditTrainingModuleDialog {
  model:any ={};
  local_data:any = {};
  trainingModule:any = {};
  /**
   *
   */
  constructor(private _trainingModuleService: TrainingModuleService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._trainingModuleService.getTrainingModule(data).subscribe((data) => {
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
    this._trainingModuleService.editTrainingModule(this.local_data,this.model).subscribe(() => {
      console.log("Edited trainingModule");
    });
  }
}