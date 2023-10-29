import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users =>this.users = users);
  }

  delete(user: IUser): void {
    if(confirm("Are you sure?") == true){
      this.users = this.users.filter(u => u !== user);
      this.userService.deleteUser(user._id).subscribe();
    }
  }
}
