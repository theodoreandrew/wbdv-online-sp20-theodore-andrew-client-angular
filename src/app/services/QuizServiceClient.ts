import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = async () => {
    const response = await axios.get("http://localhost:3000/api/quizzes");

    return response.data;
  };

  findQuizById = async (quizId) => {
    const response = await axios.get(
      `http://localhost:3000/api/quizzes/${quizId}`
    );

    return response.data;
  };
}
