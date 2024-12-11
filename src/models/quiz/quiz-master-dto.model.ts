import { MasterDto } from "../master-dto.model";

export class QuizMasterDto extends MasterDto {
    public title: string;
    public description: string;
    public duration: number;

    constructor(id: string, active: boolean, insertedAt: Date, updatedAt: Date, deletedAt: Date,
        title: string, description: string, duration: number) {
        super(id, insertedAt, updatedAt, deletedAt, active);
        this.title = title;
        this.description = description;
        this.duration = duration;
    }
}