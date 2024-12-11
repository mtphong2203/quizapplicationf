import { MasterDto } from "../master-dto.model";

export class UserMasterDto extends MasterDto {
    public firstName: string;
    public lastName: string;
    public username: string;
    public email: string;
    public phoneNumber: string;
    public thumbnailUrl: string;

    constructor(id: string, active: boolean, insertedAt: Date, updatedAt: Date, deletedAt: Date,
        firstName: string, lastName: string, username: string, email: string, phoneNumber: string, thumbnailUrl: string) {
        super(id, insertedAt, updatedAt, deletedAt, active);
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.thumbnailUrl = thumbnailUrl;
    }
}