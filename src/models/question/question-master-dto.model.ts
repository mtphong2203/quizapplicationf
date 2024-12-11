import { MasterDto } from "../master-dto.model";

export class QuestionMasterDto extends MasterDto {
    public content: string;
    public type: string;

    constructor(id: string, active: boolean, insertedAt: Date, updatedAt: Date, deletedAt: Date,
        content: string, type: string) {
        super(id, insertedAt, updatedAt, deletedAt, active);
        this.content = content;
        this.type = type;
    }
}