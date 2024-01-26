import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];
  constructor(private http: HttpClient) {
    this.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  url = 'http://localhost:8010/api/users';
  getUsers: () => Observable<User[]> = () => {
    return this.http.get<User[]>(this.url);
    // return of(this.assignments);
  };

  loggedIn = false;
  admin = false;
  currentUser = null;

  logIn(username: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      console.log('LogIn Successful');
      this.currentUser = user;
      if (user.role === 'admin') {
        this.admin = true;
        console.log('Auth: Admin');
      }
      return true;
    } else {
      console.log('LogIn Failed');
      return false;
    }
  }

  logOut() {
    console.log('LogedOut');

    this.loggedIn = false;
    this.admin = false;
    this.currentUser = null;
    localStorage.setItem('loggedIn', 'false');
    console.log('LogOut Successful');
  }

  isAdmin() {
    const isUserAdminPromise = new Promise((resolve, reject) => {
      resolve(this.currentUser?.role === 'admin');
    });
    console.log('isAdmin', this.currentUser?.role === 'admin');
    return isUserAdminPromise;
  }

  isLoggedIn() {
    const isLoggedInPromise = new Promise((resolve, reject) => {
      resolve(this.currentUser !== null);
    });
    console.log('isLoggedIn', this.currentUser !== null);
    return isLoggedInPromise;
  }

  createUser(user: User): Observable<any> {
    console.log('add user: ' + JSON.stringify(user));
    return this.http.post<User>(this.url, user);
  }
}
