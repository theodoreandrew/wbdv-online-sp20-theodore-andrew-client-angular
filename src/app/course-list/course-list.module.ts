import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListRoutingModule } from './course-list-routing.module';
import { CourseListHomeComponent } from './course-list-home/course-list-home.component';


@NgModule({
  declarations: [CourseListHomeComponent],
  imports: [
    CommonModule,
    CourseListRoutingModule
  ]
})
export class CourseListModule { }
