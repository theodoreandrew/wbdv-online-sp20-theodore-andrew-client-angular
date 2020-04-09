import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class QuizAttemptServiceClient {
  findAllAttemptsForQuiz = async (quizId: string) => {
    const response = await axios.get(
      `http://localhost:3000/api/quizzes/${quizId}/attempts`
    );

    return response.data;
  };
}
