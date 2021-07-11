import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url-constants";
import { LoggedUser } from "../models/LoggedUser";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = environmentVariables.JSON_URL;

    constructor(private http: HttpClient) {}

    checkIfUserValid(email:string, password:string) : Observable<LoggedUser> {
        const url = this.baseUrl + `loggedUser?email=${email}&password=${password}`;
        return this.http.get<LoggedUser>(url);
    }

    getUserByEmail(email:string) : Observable<LoggedUser> {
        const url = this.baseUrl + `loggedUser?email=${email}`;
        return this.http.get<LoggedUser>(url);
    }

    registerUser(user: LoggedUser) : Observable<LoggedUser> {
        let url=this.baseUrl + `loggedUser`;
        return this.http.post<LoggedUser>(url,user);
    }
}