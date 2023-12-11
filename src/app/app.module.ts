import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component'; // Assuming you have a StudentListComponent
import { CreateStudentComponent } from './create-student/create-student.component'; // Assuming you have a CreateStudentComponent
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component'; // Assuming you have an UpdateStudentComponent
import { StudentDetailsComponent } from './student-details/student-details.component'; // Assuming you have a StudentDetailsComponent

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }