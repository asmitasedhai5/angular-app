import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = 'http://localhost:8080/springboot-crud-rest/api';

  constructor(private http: HttpClient) { }

  getStudentList(): Promise<any> {
    return this.http
      .get(this.url + '/student')
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  getStudentById(id: number): Promise<any> {
    return this.http
      .get(this.url + '/student/' + id)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  insertStudent(createStudent: StudentModel): Promise<any> {
    return this.http
      .post(this.url + '/student',createStudent)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  updateStudent(id:number, updateStudent: StudentModel): Promise<any> {
    return this.http
      .put(this.url + '/student/' + id ,updateStudent)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  deleteStudent(id:number): Promise<any> {
    return this.http
      .delete(this.url + '/student/' + id)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  private handleSuccess(successResponse: any): Promise<any> {
    return Promise.resolve(successResponse);
  }

  private handleError(errorResponse: any): Promise<any> {
    return Promise.reject(errorResponse);
  }

}
