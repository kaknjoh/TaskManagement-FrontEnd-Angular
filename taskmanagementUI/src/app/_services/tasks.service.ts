import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "../_models/task.model";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    tasksurl = 'https://localhost:44388/api/taskunit';
    _url = 'https://localhost:44388/api/taskunit';

    constructor(private httpClient: HttpClient) { }

    getTasks(): Observable<Task[]> {
        return this.httpClient.get<Task[]>(this.tasksurl);
    }

    deleteTaskUnit(id: number) {
        this.httpClient.delete(this._url + '/' + id).subscribe(data => {
            alert("Task " + id + ": Successfully removed!");
        });     
    }
}