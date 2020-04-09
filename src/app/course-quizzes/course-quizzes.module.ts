import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CourseQuizzesRoutingModule } from "./course-quizzes-routing.module";
import { CourseQuizzesHomeComponent } from "./course-quizzes-home/course-quizzes-home.component";
import { QuizComponent } from "./quiz/quiz.component";
import { QuestionTrueFalseComponent } from "./question-true-false/question-true-false.component";
import { QuestionMultipleChoicesComponent } from "./question-multiple-choices/question-multiple-choices.component";
import { QuizAttemptsDetailComponent } from "./quiz-attempts-detail/quiz-attempts-detail.component";

@NgModule({
  declarations: [
    CourseQuizzesHomeComponent,
    QuizComponent,
    QuestionTrueFalseComponent,
    QuestionMultipleChoicesComponent,
    QuizAttemptsDetailComponent,
  ],
  imports: [CommonModule, CourseQuizzesRoutingModule, FormsModule],
})
export class CourseQuizzesModule {}
