import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = async quizId => {
    const response = await axios.get(
      `http://localhost:3000/api/quizzes/${quizId}/questions`
    );

    return response.data;
  };
}
