import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = async (moduleId: string) => {
    const response = await axios.get(
      `http://wbdv-generic-server.herokuapp.com/api/andrew.t/modules/${moduleId}/lessons`
    );

    return response.data;
  };
}
