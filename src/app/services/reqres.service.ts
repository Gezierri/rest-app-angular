import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  private url = 'api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http
      .get<User>(url)
      .pipe(catchError(this.handleError<User>(`getUser id=${id}`)));
  }

  public updateUser(user: User): any {
    return this.http
      .put(this.url, user, this.httpOptions)
      .pipe(catchError(this.handleError<User>(`updateUser`)));
  }

  public addUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.url, user, this.httpOptions)
      .pipe(catchError(this.handleError<User>('addUser')));
  }

  public deleteUser(user: User): Observable<User> {
    const url = `${this.url}/${user.id}`;
    console.log(url);
    return this.http
      .delete<User>(url, this.httpOptions)
      .pipe(catchError(this.handleError<User>(`deleteUser id=${user.id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
