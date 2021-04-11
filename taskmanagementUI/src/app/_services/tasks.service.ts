import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Task } from "../_models/task.model";
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