import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { GradeService } from 'src/app/_services/grade.service';
import { SubjectService } from 'src/app/_services/subject.service';
import { TrainingService } from 'src/app/_services/training.service';

@Component({
  selector: 'app-GradesT',
  templateUrl: './GradesT.component.html',
  styleUrls: ['./GradesT.component.sass']
})
export class GradesTComponent implements OnInit {
   // The subjects of the current teacher
   subjects : any;
   // All trainings
   trainings : any;
   model : any = {};
   cdid : any;
   students : any;
   grades : any[] = [];
   grade : any;
   subjectid : number = 0;
  constructor(private _subjectService : SubjectService,private _authService: AuthService,private _trainingService: TrainingService,private _gradeService : GradeService   ) { 
    this.InitSubjects();
    this.InitTrainings();
  }
 
 

  ngOnInit() {
  }

  // Displaying Students of the training
  change(event: { isUserInput: any; source: { value: number; }; })
  {
    if(event.isUserInput) {
      this._trainingService.getTraining(event.source.value).subscribe((data)=> {
          console.log(data); 
        this.cdid = data.id;
        this.students = data.studentTrainings;
        console.log(this.students);
        this.students.forEach(student => {
          console.log(student.student.id);
          this._gradeService.getGradeBySubjectUserId(student.student.id,this.subjectid).subscribe((grade)=>{
            this.grades[student.student.id] = grade.value;
            console.log(this.grades);
          })
        });
        
      });
      
    }
  }

  changedSubject(event: { isUserInput: any; source: { value: number; }; })
  {
    this.subjectid = event.source.value;
  }

  

  // Creating grades for each student of the subject
  create(){
    console.log(this.grades);
    
    this.model.subjectId = this.subjectid;
    this.grades.forEach((note,id) => {
      if(note){
        this.model.value = note;
        this.model.studentId = id;
        this._gradeService.createGrade(this.model).subscribe(() => console.log("created successfully"));
      }
      //console.log();
    });
  }

  // the teacher's assigned subjects
  InitSubjects(){
    this._subjectService.getSubjectsByTeacher(this._authService.decodedToken.nameid).subscribe((data)=> {
      console.log(this._authService.decodedToken.nameid);
      console.log(data);
      this.subjects = data;
    });
  }

  // Trainings
  InitTrainings(){
    this._trainingService.getTrainings().subscribe((data)=> {
      console.log(data);
      this.trainings = data;
    });
  }

}
