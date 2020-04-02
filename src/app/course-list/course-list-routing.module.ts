import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseListHomeComponent } from "./course-list-home/course-list-home.component";

const routes: Routes = [
  { path: "courses", component: CourseListHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseListRoutingModule {}
