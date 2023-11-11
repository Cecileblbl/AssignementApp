import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor() {
    this.loggedIn = localStorage.getItem('loggedIn') === 'true';
  }

  logIn() {
    console.log('LogedIn');
    this.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  }

  logOut() {
    console.log('LogedOut');

    this.loggedIn = false;
    localStorage.setItem('loggedIn', 'false');
  }

  isAdmin() {
    const isUserAdminPromise = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return isUserAdminPromise;
  }
}
