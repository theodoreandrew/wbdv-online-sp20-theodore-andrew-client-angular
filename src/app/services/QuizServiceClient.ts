import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = async () => {
    const response = await axios.get(
      "https://cs5610-server-node.herokuapp.com/api/quizzes"
    );

    return response.data;
  };

  findQuizById = async (quizId) => {
    const response = await axios.get(
      `https://cs5610-server-node.herokuapp.com/api/quizzes/${quizId}`
    );

    return response.data;
  };
}
