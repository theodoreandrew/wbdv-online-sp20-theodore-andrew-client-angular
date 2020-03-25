import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseViewerHomeComponent } from "./course-viewer-home/course-viewer-home.component";

const routes: Routes = [
  {
    path: ":layout/courses/:cid/modules",
    component: CourseViewerHomeComponent
  },
  {
    path: ":layout/courses/:cid/modules/:mid/lessons",
    component: CourseViewerHomeComponent
  },
  {
    path: ":layout/courses/:cid/modules/:mid/lessons/:lid",
    component: CourseViewerHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseViewerRoutingModule {}
