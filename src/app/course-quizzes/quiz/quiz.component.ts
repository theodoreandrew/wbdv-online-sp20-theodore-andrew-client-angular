import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { QuizServiceClient } from "../../services/QuizServiceClient";
import { QuestionServiceClient } from "../../services/QuestionServiceClient";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  quiz = { _id: "", title: "" };
  questions = [];

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private quizService: QuizServiceClient,
    private questionService: QuestionServiceClient
  ) {}

  submitQuiz = () => {
    fetch(`http://localhost:3000/api/quizzes/${this.quiz._id}/attempts`, {
      method: "POST",
      body: JSON.stringify(this.questions),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    this._location.back();
  };

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizService
        .findQuizById(params.quizId)
        .then((quiz) => (this.quiz = quiz));

      this.questionService
        .findQuestionsForQuiz(params.quizId)
        .then((questions) => {
          this.questions = questions;
        });
    });
  }
}
