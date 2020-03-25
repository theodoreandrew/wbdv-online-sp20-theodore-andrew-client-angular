import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CourseServiceClient } from "../../services/CourseServiceClient";

@Component({
  selector: "app-course-manager-home",
  templateUrl: "./course-manager-home.component.html",
  styleUrls: ["./course-manager-home.component.css"]
})
export class CourseManagerHomeComponent implements OnInit {
  courses = [];
  layout = "";

  constructor(
    private courseService: CourseServiceClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseService
      .findAllCourses()
      .then(courses => (this.courses = courses));

    this.route.params.subscribe(params => {
      this.layout = params.layout;
    });
  }
}
