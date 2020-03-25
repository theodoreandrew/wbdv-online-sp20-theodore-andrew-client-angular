import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-course-grid",
  templateUrl: "./course-grid.component.html",
  styleUrls: ["./course-grid.component.css"]
})
export class CourseGridComponent implements OnInit {
  @Input() courses = [];
  @Input() layout = "";

  constructor() {}

  ngOnInit(): void {}
}
