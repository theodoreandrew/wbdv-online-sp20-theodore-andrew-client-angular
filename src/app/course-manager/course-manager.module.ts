import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManagerRoutingModule } from './course-manager-routing.module';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { AddCourseBarComponent } from './add-course-bar/add-course-bar.component';
import { CourseManagerHomeComponent } from './course-manager-home/course-manager-home.component';


@NgModule({
  declarations: [CourseTableComponent, CourseGridComponent, AddCourseBarComponent, CourseManagerHomeComponent],
  imports: [
    CommonModule,
    CourseManagerRoutingModule
  ]
})
export class CourseManagerModule { }
