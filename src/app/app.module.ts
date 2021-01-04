import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateStudentComponent } from './student/create/create-student.component';
import { UpdateStudentComponent } from './student/update/update-student.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student/details/student-details.component';

import { AppRoutingModule } from './app-routing.module';
import { StudentService } from './student/shared/student.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
