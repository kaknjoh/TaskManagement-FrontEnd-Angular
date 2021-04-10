import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    constructor(private httpClient: HttpClient) {
    }

    getTasks() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    }
}