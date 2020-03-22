import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ModuleServiceClient } from "../../services/ModuleServiceClient";

@Component({
  selector: "app-module-list",
  templateUrl: "./module-list.component.html",
  styleUrls: ["./module-list.component.css"]
})
export class ModuleListComponent implements OnInit {
  modules = [];
  courseId = "";

  constructor(
    private route: ActivatedRoute,
    private service: ModuleServiceClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.service
        .findAllModules(this.courseId)
        .then(modules => (this.modules = modules));
    });
  }
}
