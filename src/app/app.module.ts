import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { CourseTableModule } from "./course-table/course-table.module";
import { CourseViewerModule } from "./course-viewer/course-viewer.module";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

import { CourseServiceClient } from "./services/CourseServiceClient";
import { ModuleServiceClient } from "./services/ModuleServiceClient";
import { LessonServiceClient } from "./services/LessonServiceClient";

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseTableModule,
    CourseViewerModule
  ],
  providers: [CourseServiceClient, ModuleServiceClient, LessonServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
