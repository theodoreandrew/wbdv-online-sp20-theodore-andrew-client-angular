import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseManagerHomeComponent } from "./course-manager-home/course-manager-home.component";

const routes: Routes = [{ path: "", component: CourseManagerHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseManagerRoutingModule {}
