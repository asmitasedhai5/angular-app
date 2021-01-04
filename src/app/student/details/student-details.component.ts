import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../shared/student.service';
import { StudentModel } from '../shared/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  id: number = 0;
  student: StudentModel = new StudentModel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStudentById();
  }

  getStudentById() {
    this.studentService.getStudentById(this.id)
    .then(successResponse => {
      this.student = successResponse;
    })
    .catch(errorResponse => {
      console.log(errorResponse);
    })
  }

  back(){
    this.router.navigate(['student']);
  }

}
