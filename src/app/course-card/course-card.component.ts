import { Course } from './../model/course';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Input() cardIndex: number;

  @Output('selectedCourse') selectedCourse: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }
  isBeginner(): { [key: string]: boolean } {
    return { 'beginner': this.course.category == 'BEGINNER' }
  }

  onCouseViewed(): void {
    this.selectedCourse.emit(this.course);
  }
}
