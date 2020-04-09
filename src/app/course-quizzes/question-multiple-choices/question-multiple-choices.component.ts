import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-question-multiple-choices",
  templateUrl: "./question-multiple-choices.component.html",
  styleUrls: ["./question-multiple-choices.component.css"],
})
export class QuestionMultipleChoicesComponent implements OnInit {
  @Input() question = {
    _id: "",
    title: "",
    quizId: "",
    question: "",
    correct: "",
    choices: [],
    answer: "",
  };
  @Input() answer = "No answer yet";

  @Output() answerChange = new EventEmitter<string>();

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
