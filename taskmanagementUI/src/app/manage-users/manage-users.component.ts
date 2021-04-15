import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  removeUser(id: number) {
    let usersArray: User[] = Array.from(this.users);
    let index = usersArray.indexOf(usersArray.find(element => element.assignedUserId == id));
    this.usersService.deleteUser(id);
    this.users.splice(index, 1);
  }
}
