import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  isLogFailed = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {}
  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      if (this.authService.logIn(username || '', password || '')) {
        this.router.navigate(['/home']);
      } else {
        this.isLogFailed = true;
      }
    }
  }

  OnLogout(event: any) {
    console.log('logout');
    this.authService.logOut();
    this.router.navigate(['/home']);
  }
  isLoggedIn() {
    // renvoie si on est loggé ou pas
    console.log(this.authService.loggedIn);
    return this.authService.loggedIn;
  }
}
