import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseViewerRoutingModule } from "./course-viewer-routing.module";
import { CourseViewerHomeComponent } from "./course-viewer-home/course-viewer-home.component";
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

@NgModule({
  declarations: [CourseViewerHomeComponent, ModuleListComponent, LessonListComponent],
  imports: [CommonModule, CourseViewerRoutingModule]
})
export class CourseViewerModule {}
