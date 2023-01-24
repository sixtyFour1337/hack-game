import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public credentials: any = {};

  constructor(private userService: UserService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  /*
  createUser(): void {
    this.userService.create({username: 'timon test'}).subscribe(data => {
      
    });
  }
  */

}
