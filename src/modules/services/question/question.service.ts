import { HttpClient } from "@angular/common/http";
import { MasterService } from "../master.service";
import { Injectable } from "@angular/core";
import { IQuestionService } from "./question.interface";

@Injectable({
    providedIn: 'root'
})
export class QuestionService extends MasterService implements IQuestionService {
    constructor(protected override httpClient: HttpClient) {
        super('questions', httpClient);
    }
}