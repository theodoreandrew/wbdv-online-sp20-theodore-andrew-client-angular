import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CourseServiceClient } from "../../services/CourseServiceClient";
import { ModuleServiceClient } from "../../services/ModuleServiceClient";

@Component({
  selector: "app-course-viewer-home",
  templateUrl: "./course-viewer-home.component.html",
  styleUrls: ["./course-viewer-home.component.css"]
})
export class CourseViewerHomeComponent implements OnInit {
  course = { _id: "", title: "" };
  layoutRoute = "";
  modules = [];

  constructor(
    private courseService: CourseServiceClient,
    private moduleService: ModuleServiceClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const courseId = params.cid;
      this.courseService
        .findCourseById(courseId)
        .then(course => (this.course = course));

      this.moduleService.findAllModules(courseId).then(modules => {
        this.modules = modules;
        console.log(this.modules.length);
      });

      this.layoutRoute = params.layout;
    });
  }
}
