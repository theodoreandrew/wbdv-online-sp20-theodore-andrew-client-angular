import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { QuizServiceClient } from "../../services/QuizServiceClient";
import { QuestionServiceClient } from "../../services/QuestionServiceClient";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  quiz = { _id: "", title: "" };
  questions = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizServiceClient,
    private questionService: QuestionServiceClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService
        .findQuizById(params.quizId)
        .then(quiz => (this.quiz = quiz));

      this.questionService
        .findQuestionsForQuiz(params.quizId)
        .then(questions => (this.questions = questions));
    });
  }
}
