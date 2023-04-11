import { User } from './../../user';
import { ReqresService } from './../../services/reqres.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private reqresService: ReqresService, private router: Router) {
    this.getUsers();
  }

  public getUsers() {
    console.log(this.reqresService.getUsers());
    this.reqresService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public showUserDetail(id: number) {
    this.router.navigate(['/user', id]);
  }

  ngOnInit(): void {}
}
