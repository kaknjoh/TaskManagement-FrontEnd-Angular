import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/user.model";
import { from, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    usersUrl = 'https://localhost:44388/api/assigneduser';

    constructor(private _http: HttpClient) { }

    postUser(user: User) {
        return this._http.post<any>(this.usersUrl, user);
    }

    getAllUsers(): Observable<User[]> {
        return this._http.get<User[]>(this.usersUrl);
    }
}