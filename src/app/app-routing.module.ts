import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  {
    path: ":layout/courses",
    loadChildren: () =>
      import("./course-manager/course-manager.module").then(
        m => m.CourseManagerModule
      )
  },
  {
    path: ":layout/courses/:cid/modules",
    loadChildren: () =>
      import("./course-viewer/course-viewer.module").then(
        m => m.CourseViewerModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
