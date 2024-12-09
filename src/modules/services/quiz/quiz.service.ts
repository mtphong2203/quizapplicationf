import { HttpClient } from "@angular/common/http";
import { MasterService } from "../master.service";
import { Injectable } from "@angular/core";
import { IQuizService } from "./quiz.interface";

@Injectable({
    providedIn: 'root'
})
export class QuizService extends MasterService implements IQuizService {
    constructor(protected override httpClient: HttpClient) {
        super('quizzes', httpClient);
    }
}  