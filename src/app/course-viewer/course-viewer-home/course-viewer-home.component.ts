import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseServiceClient } from "../../services/CourseServiceClient";

@Component({
  selector: "app-course-viewer-home",
  templateUrl: "./course-viewer-home.component.html",
  styleUrls: ["./course-viewer-home.component.css"]
})
export class CourseViewerHomeComponent implements OnInit {
  course = { _id: "", title: "" };

  constructor(
    private service: CourseServiceClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const courseId = params.cid;
      this.service
        .findCourseById(courseId)
        .then(course => (this.course = course));
    });
  }
}
