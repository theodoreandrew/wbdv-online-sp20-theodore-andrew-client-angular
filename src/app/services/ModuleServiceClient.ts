import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class ModuleServiceClient {
  findAllModules = async (courseId: string) => {
    const response = await axios.get(
      `https://wbdv-generic-server.herokuapp.com/api/andrew.t/courses/${courseId}/modules`
    );

    return response.data;
  };
}
