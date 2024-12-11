import { MasterDto } from "../master-dto.model";

export class RoleMasterDto extends MasterDto {
    public name: string;
    public description: string;

    constructor(id: string, createdAt: Date, updatedAt: Date, deletedAt: Date, active: boolean, name: string, description: string) {
        super(id, createdAt, updatedAt, deletedAt, active);
        this.name = name;
        this.description = description;
    }

}