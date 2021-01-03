import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModuleService } from '../../_services/module.service';

@Component({
  selector: 'app-Modules',
  templateUrl: './Modules.component.html',
  styleUrls: ['./Modules.component.sass']
})
export class ModulesComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  modules: any;
  makes: any[] = [];
  
  constructor(private _moduleService: ModuleService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateModuleDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._moduleService.getModules()
      .subscribe(data => {
        this.modules = data;
        this.dataSource = new MatTableDataSource<Module>(this.modules);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Module
  delete(id: any){
    this._moduleService.deleteModuleById(id)
      .subscribe(() => console.log("module deleted"));
  }

  // Creating a module
  create(){
    this._moduleService.createModule(this.model).subscribe(() => {
      console.log("created module");
    });
  }

  
}


export interface Module {
  ID: string;
  Title: string;
}


@Component({
  selector: 'create-module-dialog',
  templateUrl: 'create-module-dialog.html',
})
export class CreateModuleDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _moduleService: ModuleService) {
    
  }
  // Creating a module
  create(){
    this._moduleService.createModule(this.model).subscribe(() => {
      console.log("created module");
    });
  }
}