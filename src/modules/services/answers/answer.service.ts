import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MasterService } from "../master.service";
import { IAnswerService } from "./answer.interface";

@Injectable({
    providedIn: 'root'
})
export class AnswerService extends MasterService implements IAnswerService {
    constructor(protected override httpClient: HttpClient) {
        super('answers', httpClient);
    }
}