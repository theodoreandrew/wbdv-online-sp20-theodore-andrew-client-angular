import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class CourseServiceClient {
  findAllCourses = async () => {
    const response = await axios.get(
      "https://wbdv-generic-server.herokuapp.com/api/andrew.t/courses"
    );

    return response.data;
  };
  findCourseById = async (courseId: string) => {
    const response = await axios.get(
      `https://wbdv-generic-server.herokuapp.com/api/andrew.t/courses/${courseId}`
    );

    return response.data;
  };
}
