import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseTableHomeComponent } from "./course-table-home/course-table-home.component";

const routes: Routes = [
  {
    path: "table/courses",
    component: CourseTableHomeComponent,
    pathMatch: "prefix"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseTableRoutingModule {}
