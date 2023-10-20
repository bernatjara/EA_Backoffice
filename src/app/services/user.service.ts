import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:9090/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.usersUrl);
  }

  getUser(id: string): Observable<IUser> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<IUser>(url)
  }

  //////// Save methods //////////

  /** PUT: update the user on the server */
  updateUser(id: string, user: any): Observable<any> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.put<IUser>(url, user);
  }

}
