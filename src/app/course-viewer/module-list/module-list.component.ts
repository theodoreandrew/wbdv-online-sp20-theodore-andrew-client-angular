import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ModuleServiceClient } from "../../services/ModuleServiceClient";

@Component({
  selector: "app-module-list",
  templateUrl: "./module-list.component.html",
  styleUrls: ["./module-list.component.css"]
})
export class ModuleListComponent implements OnInit {
  @Input() modules = [];
  courseId = "";
  moduleId = "";
  layoutRoute = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.layoutRoute = params.layout;
    });
  }
}
