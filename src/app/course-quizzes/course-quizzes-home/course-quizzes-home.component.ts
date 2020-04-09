import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { QuizServiceClient } from "../../services/QuizServiceClient";

@Component({
  selector: "app-course-quizzes-home",
  templateUrl: "./course-quizzes-home.component.html",
  styleUrls: ["./course-quizzes-home.component.css"],
})
export class CourseQuizzesHomeComponent implements OnInit {
  quizzes = [];
  courseId = "";

  constructor(
    private quizService: QuizServiceClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.quizService.findAllQuizzes().then((quizzes) => {
      this.quizzes = quizzes;
    });

    this.route.params.subscribe((params) => {
      this.courseId = params.courseId;
    });
  }
}
