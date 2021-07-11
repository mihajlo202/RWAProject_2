export class LoggedUser {
    id:number;
    email:string;
    password: string;
    role: string;

    constructor(email:string, pass: string, role:string) {
        this.email = email;
        this.password = pass;
        this.role = role;
    }
}