export class MasterDto {
    public id: string;
    public createdAt: Date;
    public updatedAt: Date;
    public deletedAt: Date;
    public active: boolean;

    constructor(id: string, createdAt: Date, updatedAt: Date, deletedAt: Date, active: boolean) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.active = active;
    }
}