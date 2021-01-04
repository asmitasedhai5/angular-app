import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../shared/student.model';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  student: StudentModel = new StudentModel(); 
  submitted: Boolean = false;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.studentService.insertStudent(this.student)
    .then(successResponse => {
      this.student = successResponse;
    })
    .catch(errorResponse => {
      console.log(errorResponse);
    })
  }

  reset() {
    this.submitted = false;
    this.student = new StudentModel();
  }

}
