import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './../model/course';
@Component({
  selector: 'courses',
  templateUrl: './app.courses-list.component.html'

})
export class AppCoursesListComponent {
  courses: Course[] = COURSES;
  firstCourse: Course = COURSES[0];


  startDate: Date = new Date(2000, 0, 1);
  constructor() {
    this.firstCourse = COURSES[0];
  }


  selectedCourse(course: Course): void {
    console.log("Course selection", course);
  }
}