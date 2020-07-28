import { Course } from './../model/course';
import { Component} from "@angular/core";
import { COURSES } from 'src/db-data';

@Component({
    selector:'tree-container',
    templateUrl:'app.treeContainer.component.html'
})
export class AppTreeContainerComponent{
    courses: Course[] = COURSES;
    firstCourse: Course = COURSES[0];
  
    startDate: Date = new Date(2000, 0, 1);
    constructor(){
      this.firstCourse = COURSES[0];
    }
  
  
    selectedCourse(course: Course): void {
      console.log("Course selection", course);
    }
}