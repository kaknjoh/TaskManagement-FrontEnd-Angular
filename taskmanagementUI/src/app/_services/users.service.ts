import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/user.model";
import { from, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    // surl = 'https://localhost:44388/api/taskunit';
    _url = 'https://localhost:44388/api/assigneduser';

    constructor(private _http: HttpClient) { }

    postUser(user: User) {
        return this._http.post<any>(this._url, user);
    }

    getAllUsers(): Observable<User[]> {
        return this._http.get<User[]>(this._url);
    }
}