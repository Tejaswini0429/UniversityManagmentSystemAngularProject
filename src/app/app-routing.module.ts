import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component'; // Assuming you have a StudentListComponent
import { CreateStudentComponent } from './create-student/create-student.component'; // Assuming you have a CreateStudentComponent
import { UpdateStudentComponent } from './update-student/update-student.component'; // Assuming you have an UpdateStudentComponent
import { StudentDetailsComponent } from './student-details/student-details.component'; // Assuming you have a StudentDetailsComponent

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'create-student', component: CreateStudentComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'update-student/:id', component: UpdateStudentComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }