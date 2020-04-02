import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseQuizzesHomeComponent } from "./course-quizzes-home/course-quizzes-home.component";
import { QuizComponent } from "./quiz/quiz.component";

const routes: Routes = [
  { path: "courses/:courseId/quizzes", component: CourseQuizzesHomeComponent },
  { path: "courses/:courseId/quizzes/:quizId", component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseQuizzesRoutingModule {}
