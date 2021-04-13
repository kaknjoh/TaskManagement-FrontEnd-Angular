import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "../_models/task.model";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    tasksUrl = 'https://localhost:44388/api/taskunit'

    constructor(private httpClient: HttpClient) { }

    getTasks(): Observable<Task[]> {
        return this.httpClient.get<Task[]>(this.tasksUrl);
    }

    deleteTaskUnit(id: number) {
        this.httpClient.delete(this.tasksUrl + '/' + id).subscribe(data => {
            alert("Task " + id + ": Successfully removed!");
        });     
    }
}