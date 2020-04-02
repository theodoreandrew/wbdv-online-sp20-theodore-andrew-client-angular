import { Component, OnInit } from "@angular/core";

import { CourseServiceClient } from "../../services/CourseServiceClient";

@Component({
  selector: "app-course-list-home",
  templateUrl: "./course-list-home.component.html",
  styleUrls: ["./course-list-home.component.css"]
})
export class CourseListHomeComponent implements OnInit {
  courses = [];

  constructor(private courseService: CourseServiceClient) {}

  ngOnInit(): void {
    this.courseService
      .findAllCourses()
      .then(courses => (this.courses = courses));
  }
}
