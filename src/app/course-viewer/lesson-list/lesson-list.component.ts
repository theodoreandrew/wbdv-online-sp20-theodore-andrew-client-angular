import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { LessonServiceClient } from "../../services/LessonServiceClient";

@Component({
  selector: "app-lesson-list",
  templateUrl: "./lesson-list.component.html",
  styleUrls: ["./lesson-list.component.css"]
})
export class LessonListComponent implements OnInit {
  lessons = [];
  courseId = "";
  moduleId = "";
  lessonId = "";
  layoutRoute = "";

  constructor(
    private route: ActivatedRoute,
    private service: LessonServiceClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.lessonId = params.lid;
      this.moduleId = params.mid;
      this.layoutRoute = params.layout;
      this.service
        .findLessonsForModule(this.moduleId)
        .then(lessons => (this.lessons = lessons));
    });
  }
}
