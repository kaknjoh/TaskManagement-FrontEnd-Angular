import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Task } from "../_models/task.model";

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

    constructor(
        public dialogRef: MatDialogRef<TaskDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Task) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}