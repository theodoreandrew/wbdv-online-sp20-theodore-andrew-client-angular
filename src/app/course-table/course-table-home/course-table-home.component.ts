import { Component, OnInit } from "@angular/core";

import { CourseServiceClient } from "../../services/CourseServiceClient";

@Component({
  selector: "app-course-table-home",
  templateUrl: "./course-table-home.component.html",
  styleUrls: ["./course-table-home.component.css"]
})
export class CourseTableHomeComponent implements OnInit {
  courses = [];

  constructor(private service: CourseServiceClient) {}

  ngOnInit(): void {
    this.service.findAllCourses().then(courses => (this.courses = courses));
  }
}
