import { Course } from './model/course';
import { COURSES } from './../db-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: Course[] = COURSES;




  selectedCourse(course:Course): void {
    console.log("Course selection", course);
  }

}
