import { Component, OnInit } from '@angular/core';
import { Student } from '../student'; // Assuming you have a Student model
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service'; // Assuming you have a StudentService

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id!: number;
  student!: Student; // Assuming you have a Student model
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student(); // Assuming you have a Student model
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
    });
  }
}
