import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  users: User[];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

}
