import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../shared/student.model';
import { StudentService } from '../shared/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  id: number = 0;
  student: StudentModel = new StudentModel();
  submitted: Boolean = false;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById();
  }

  onSubmit() {
    this.submitted = true;
    this.updateStudent();
  }

  getById() {
    this.studentService.getStudentById(this.id)
    .then(successResponse => {
      this.student = successResponse;
    })
    .catch(errorResponse => {
      console.log(errorResponse);
    })
  }

  updateStudent() {
    this.studentService.updateStudent(this.id, this.student)
    .then(successResponse => {
     console.log(successResponse);
     this.student = new StudentModel();
     this.back();

    })
    .catch(errorResponse => {
      console.log(errorResponse);
    })
  }

  back() {
    this.router.navigate(['/student']);
  }



}
