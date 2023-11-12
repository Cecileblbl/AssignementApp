import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users = [
    { username: 'user1', password: 'password1', role: 'user' },
    { username: 'admin1', password: 'password2', role: 'admin' },
    { username: 'user2', password: 'password3', role: 'user' },
    { username: 'admin2', password: 'password4', role: 'admin' },
    { username: 'user3', password: 'password5', role: 'user' },
  ];

  loggedIn = false;
  currentUser = null;

  constructor() {
    this.loggedIn = localStorage.getItem('loggedIn') === 'true';
  }

  logIn(username: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      console.log('LogIn Successful');
      this.currentUser = user;
      return true;
    } else {
      console.log('LogIn Failed');
      return false;
    }
  }

  logOut() {
    console.log('LogedOut');

    this.loggedIn = false;
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
}
