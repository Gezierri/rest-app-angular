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
  loading = true;
  
  constructor(private reqresService: ReqresService, private router: Router) {
    this.getUsers();
  }

  public getUsers() {
    this.loading = true;
    this.reqresService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public showUserDetail(id: number) {
    this.router.navigate(['/user', id]);
  }

  public addUser(): void {
    this.router.navigate(['add']);
  }

  public deleteUser(user: any) {
    this.users = this.users.filter((u) => u !== user);
    this.reqresService.deleteUser(user).subscribe();
  }

  ngOnInit(): void {}
}
