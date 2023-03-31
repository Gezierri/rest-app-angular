import { User } from './../../user';
import { ReqresService } from './../../services/reqres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  constructor(private reqresService: ReqresService) {
    this.getUsers();
  }

  public getUsers() {
    console.log(this.reqresService.getUsers());
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }
}
