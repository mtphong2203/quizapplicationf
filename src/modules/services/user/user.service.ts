import { Injectable } from "@angular/core";
import { MasterService } from "../master.service";
import { HttpClient } from "@angular/common/http";
import { IUserService } from "./user.interface";

@Injectable({
    providedIn: 'root'
})

export class UserService extends MasterService implements IUserService {
    constructor(protected override httpClient: HttpClient) {
        super('users', httpClient);
    }
}