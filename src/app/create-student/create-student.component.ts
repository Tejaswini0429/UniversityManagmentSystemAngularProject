import { Component, OnInit } from '@angular/core';
import { Student } from '../student'; // Assuming you have a Student model
import { StudentService } from '../student.service'; // Assuming you have a StudentService
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student(); // Assuming you have a Student model
  constructor(private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveStudent() {
    this.studentService.createStudent(this.student).subscribe(data => {
        console.log(data);
        this.goToStudentList();
      },
      error => console.log(error));
  }

  goToStudentList() {
    this.router.navigate(['/students']);
  }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }
}