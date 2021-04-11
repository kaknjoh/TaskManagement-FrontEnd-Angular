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

  constructor(private usersService: UsersService) { }

  addUser() {
    console.log(this.userModel);
    this.usersService.getUser(this.userModel).subscribe(
      data => console.log("Success", data),
      error => console.log("Error", error)
    )
  }

}
