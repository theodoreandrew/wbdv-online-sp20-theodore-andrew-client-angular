import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseTableRoutingModule } from "./course-table-routing.module";
import { CourseTableHomeComponent } from "./course-table-home/course-table-home.component";
import { AddCourseBarComponent } from './add-course-bar/add-course-bar.component';

@NgModule({
  declarations: [CourseTableHomeComponent, AddCourseBarComponent],
  imports: [CommonModule, CourseTableRoutingModule]
})
export class CourseTableModule {}
