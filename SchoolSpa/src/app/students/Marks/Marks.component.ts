import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-Marks',
  templateUrl: './Marks.component.html',
  styleUrls: ['./Marks.component.sass']
})
export class MarksComponent implements OnInit {
  tiles: Tile[] = [];
  grades: any[] = [];
  constructor(private _authService : AuthService, private _userService : UserService) { }

  ngOnInit() {
    this._userService.getUser(this._authService.decodedToken.nameid).subscribe((data) => {
      data.grades.forEach((item: { subjectID: number; }) => {
        this.grades[item.subjectID] = item;
      });
      console.log(this.grades);
      var sum = 0;
      data.studentTraining.training.modules.forEach((item: { subjects: string | any[]; }) => {
        sum += item.subjects.length;
      });
      console.log("this is the sum :"+sum)
      data.studentTraining.training.modules.forEach((item: { title: any; subjects: any[]; }) => {
        this.tiles.push({text: item.title, cols: 1, rows: item.subjects.length, color: 'lightblue'})
        item.subjects.forEach((item,index) => {
          this.tiles.push({text: item.title, cols: 2, rows: 1, color: 'lightblue'})
          if(this.grades[item.id]){
            this.tiles.push({text: this.grades[item.id].value, cols: 1, rows: 1, color: 'lightblue'})  
          } 
          else{
            this.tiles.push({text: "none", cols: 1, rows: 1, color: 'lightblue'})  
          }
        });
      });
    })
  }


  

}


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
