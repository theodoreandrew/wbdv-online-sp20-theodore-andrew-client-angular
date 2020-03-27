import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseViewerHomeComponent } from "./course-viewer-home/course-viewer-home.component";

const routes: Routes = [
  {
    path: "",
    component: CourseViewerHomeComponent
  },
  {
    path: ":mid/lessons",
    component: CourseViewerHomeComponent
  },
  {
    path: ":mid/lessons/:lid",
    component: CourseViewerHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseViewerRoutingModule {}
