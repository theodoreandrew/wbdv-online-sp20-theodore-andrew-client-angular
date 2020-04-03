import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-question-true-false",
  templateUrl: "./question-true-false.component.html",
  styleUrls: ["./question-true-false.component.css"]
})
export class QuestionTrueFalseComponent implements OnInit {
  @Input() question = {
    _id: "",
    title: "",
    quizId: "",
    question: "",
    correct: "",
    answer: ""
  };
  @Input() answerSelected = "No answer yet";

  grading = false;

  constructor() {}

  onChangeAnswer = () => {
    this.grading = false;
  };

  onSubmitAnswer = () => {
    this.grading = true;
  };

  ngOnInit(): void {}
}
