import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = async quizId => {
    const response = await axios.get(
      `https://cs5610-server-node.herokuapp.com/api/quizzes/${quizId}/questions`
    );

    return response.data;
  };
}
