import { Component, OnInit } from '@angular/core';
import { StudentModel } from './shared/student.model';
import { StudentService } from './shared/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public studentList: Array<StudentModel> = new Array<StudentModel>();

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  public getStudentList() {
    this.studentService.getStudentList()
    .then(response =>{
      this.studentList = response;
    })
    .catch(error => {
      console.log(error);
    })
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId)
    .then(successResponse => {
      console.log(successResponse);
      this.getStudentList();
    })
    .catch(errorResponse => {
      console.log(errorResponse);
    })

  }

  updateStudent(id:number) {
    this.router.navigate(['update', id]);
  }

  goToDetails(id:number) {
    this.router.navigate(['details', id]);
  }

}
