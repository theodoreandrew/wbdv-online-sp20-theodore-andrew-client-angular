import { Component, OnInit, Input } from "@angular/core";

import { QuizAttemptServiceClient } from "../../services/QuizAttemptServiceClient";

@Component({
  selector: "app-quiz-attempts-detail",
  templateUrl: "./quiz-attempts-detail.component.html",
  styleUrls: ["./quiz-attempts-detail.component.css"],
})
export class QuizAttemptsDetailComponent implements OnInit {
  @Input() quizId = "";
  attempts = [];

  constructor(private quizAttemptService: QuizAttemptServiceClient) {}

  ngOnInit(): void {
    this.quizAttemptService
      .findAllAttemptsForQuiz(this.quizId)
      .then((attempts) => (this.attempts = attempts));
  }
}
