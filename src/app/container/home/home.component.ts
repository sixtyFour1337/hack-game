import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public username = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.create({username: 'timon test'}).subscribe(data => {
      this.username = data.username;
    });
  }

}
