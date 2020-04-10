import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class QuizAttemptServiceClient {
  findAllAttemptsForQuiz = async (quizId: string) => {
    const response = await axios.get(
      `https://cs5610-server-node.herokuapp.com/api/quizzes/${quizId}/attempts`
    );

    return response.data;
  };
}
