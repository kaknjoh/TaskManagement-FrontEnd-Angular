import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userModel = <User>{};
  users: User[];

  constructor(private usersService: UsersService) { }

  addUser() {
    console.log(this.userModel);
    this.usersService.postUser(this.userModel).subscribe(
      data => { alert("User successfully added!") },
    )
  }

}
