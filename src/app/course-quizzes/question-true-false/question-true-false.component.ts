import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-question-true-false",
  templateUrl: "./question-true-false.component.html",
  styleUrls: ["./question-true-false.component.css"],
})
export class QuestionTrueFalseComponent implements OnInit {
  @Input() question = {
    _id: "",
    title: "",
    quizId: "",
    question: "",
    correct: "",
    answer: "",
  };
  @Input() answer = "No answer yet";

  @Output()
  answerChange = new EventEmitter<string>();

  answerSelected = false;
  recorded = false;

  submitAnswer = () => {
    this.answerChange.emit(this.answer);
    this.recorded = true;
  };

  constructor() {}

  onChangeAnswer = () => {
    this.recorded = false;
    this.answerSelected = true;
  };

  ngOnInit(): void {}
}
