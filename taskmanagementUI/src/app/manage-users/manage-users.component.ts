import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { UserService } from '../_services/users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void {
      this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  removeUser(id: number): void {
    let usersArray: User[] = Array.from(this.users);
    let index = usersArray.indexOf(usersArray.find(element => element.assignedUserId == id));
    this.userService.deleteUser(id);
    this.users.splice(index, 1);
  }
}
