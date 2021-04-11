import { Component, OnInit } from '@angular/core';
import { Task } from '../_models/task.model';
import { TasksService } from '../_services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selected: string = '';  
  totalRecords: string;
  page: Number = 1;
  tasks: any;
  title: any;

  constructor(private tasksService: TasksService) {
    this.tasks = new Array<any>()
  }
  
  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(data => {
      this.tasks = data;
    })
  }

  Search() {
    if (this.title == "") {
      this.ngOnInit();
    }
    else {
      this.tasks = this.tasks.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }

  removeTask(id: number) {
    let tasksArray: any[] = Array.from(this.tasks);
    let index = tasksArray.indexOf(tasksArray.find(element => element.id == id));
    this.tasks.splice(index, 1);
  }

}
