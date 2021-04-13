import { Component, OnInit } from '@angular/core';
import { Task } from '../_models/task.model';
import { TasksService } from '../_services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selected: string = '';
  totalRecords: string;
  page: Number = 1;
  tasks: Task[];
  Name: any;
  Description: any;

  constructor(private tasksService: TasksService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getTasksList();
  }

  getTasksList() {
    this.tasksService.getTasks().subscribe(data => {
      this.tasks = data;
    })
  }

  Search() {
    if ((this.Name == "")) {
      this.ngOnInit();
    }
    else {
      this.tasks = this.tasks.filter(res => {
        return res.name.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
      });
    }
  }

  removeTask(id: number) {
    let tasksArray: Task[] = Array.from(this.tasks);
    let index = tasksArray.indexOf(tasksArray.find(element => element.taskUnitId == id));
    this.tasksService.deleteTaskUnit(id);
    this.tasks.splice(index, 1);
  }

  viewDetails(id: number): void {
    let task = this.tasks.find(x => x.taskUnitId == id);
    this.dialog.open(TaskDetailsComponent, {
      width: '450px',
      data: {
        name: task.name,
        description: task.description,
        taskUnitId: task.taskUnitId,
        startDate: task.startDate,
        endDate: task.endDate,
        assignedUsers: task.assignedUsers
      }
    });
  }
}
