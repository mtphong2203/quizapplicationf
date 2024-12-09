import { HttpClient } from "@angular/common/http";
import { MasterService } from "../master.service";
import { IRoleService } from "./role.interface";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RoleService extends MasterService implements IRoleService {
    constructor(protected override httpClient: HttpClient) {
        super('roles', httpClient);
    }
}