import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/user.model";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    usersUrl = environment.baseUrl + '/api/assigneduser';

    constructor(private _http: HttpClient) { }

    postUser(user: User) {
        return this._http.post<any>(this.usersUrl, user);
    }

    getAllUsers(): Observable<User[]> {
        return this._http.get<User[]>(this.usersUrl);
    }

    deleteUser(id: number) {
        this._http.delete(this.usersUrl + '/' + id).subscribe(data => {
            alert("User with ID " + id + ": Successfully removed!");
        });     
    }
}