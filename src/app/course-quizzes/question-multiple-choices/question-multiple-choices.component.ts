import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-question-multiple-choices",
  templateUrl: "./question-multiple-choices.component.html",
  styleUrls: ["./question-multiple-choices.component.css"]
})
export class QuestionMultipleChoicesComponent implements OnInit {
  @Input() question = {
    _id: "",
    title: "",
    quizId: "",
    question: "",
    correct: "",
    choices: []
  };

  constructor() {}

  ngOnInit(): void {}
}
