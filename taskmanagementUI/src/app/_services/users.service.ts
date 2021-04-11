import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    _url = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private _http: HttpClient) { }

    getUser(user: User) {
        return this._http.post<any>(this._url, user);
    }

}