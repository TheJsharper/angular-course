import { BrowserModule } from '@angular/platform-browser';
import { CourseCardComponent } from './course-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations:[CourseCardComponent],
    imports:[CommonModule],
    exports:[CourseCardComponent],

})
export class CourseCardModule{}