import { Component, OnInit } from '@angular/core';
import { Task } from '../_models/task.model';
import { TasksService } from '../_services/tasks.service';
import { User } from '../_models/user.model';

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

  constructor(private tasksService: TasksService) {  }
  
  ngOnInit() {
    this.getTasksList();
  }

  getTasksList()
  {
    this.tasksService.getTasks().subscribe(data => {
      console.log(data);
      this.tasks = data;
    })
  }
  
  Search() {
    if ((this.Name == "") || (this.Description == "")) {
      this.ngOnInit();
    }
    else {
      this.tasks = this.tasks.filter(res => {
        return res.name.toLocaleLowerCase().match(this.Name.toLocaleLowerCase()), 
              res.description.toLocaleLowerCase().match(this.Description.toLocaleLowerCase());

      });
    }
  }

  removeTask(id: number) {
    let tasksArray: Task[] = Array.from(this.tasks);
    let index = tasksArray.indexOf(tasksArray.find(element => element.taskUnitId == id));
    this.tasksService.deleteTaskUnit(id);
    this.tasks.splice(index, 1);
  }
}
