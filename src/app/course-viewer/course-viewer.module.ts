import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseViewerRoutingModule } from "./course-viewer-routing.module";
import { CourseViewerHomeComponent } from "./course-viewer-home/course-viewer-home.component";
import { ModuleListComponent } from './module-list/module-list.component';

@NgModule({
  declarations: [CourseViewerHomeComponent, ModuleListComponent],
  imports: [CommonModule, CourseViewerRoutingModule]
})
export class CourseViewerModule {}
