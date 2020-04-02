import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { CourseViewerModule } from "./course-viewer/course-viewer.module";
import { CourseManagerModule } from "./course-manager/course-manager.module";
import { CourseListModule } from "./course-list/course-list.module";
import { CourseQuizzesModule } from "./course-quizzes/course-quizzes.module";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

import { CourseServiceClient } from "./services/CourseServiceClient";
import { ModuleServiceClient } from "./services/ModuleServiceClient";
import { LessonServiceClient } from "./services/LessonServiceClient";
import { QuizServiceClient } from "./services/QuizServiceClient";
import { QuestionServiceClient } from "./services/QuestionServiceClient";

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseViewerModule,
    CourseManagerModule,
    CourseListModule,
    CourseQuizzesModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
