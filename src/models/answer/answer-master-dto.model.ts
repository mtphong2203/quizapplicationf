import { MasterDto } from "../master-dto.model";

export class AnswerMasterDto extends MasterDto {
    public content: string;
    public correct: boolean;

    constructor(id: string, active: boolean, insertedAt: Date, updatedAt: Date, deletedAt: Date,
        content: string, correct: boolean) {
        super(id, insertedAt, updatedAt, deletedAt, active);
        this.content = content;
        this.correct = correct;
    }
}