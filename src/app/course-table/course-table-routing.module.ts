import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseTableHomeComponent } from "./course-table-home/course-table-home.component";

const routes: Routes = [
  {
    path: "table/course",
    component: CourseTableHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseTableRoutingModule {}
