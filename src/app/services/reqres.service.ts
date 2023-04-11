import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  private url = 'api/users';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
      return this.http.get<User>(url);
  }
}
