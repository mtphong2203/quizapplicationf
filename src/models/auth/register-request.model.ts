export class RegisterRequest {
    public firstName: string;
    public lastName: string;
    public username: string;
    public email: string;
    public phoneNumber: string;
    public thumbnailUrl: string;
    public password: string;
    public confirmPassword: string;

    constructor(firstName: string, lastName: string, username: string, email: string,
        phoneNumber: string, thumbnailUrl: string, password: string, confirmPassword: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.thumbnailUrl = thumbnailUrl;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}