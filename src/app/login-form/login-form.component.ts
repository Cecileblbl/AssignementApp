import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignementService } from 'src/app/shared/assignement.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private assignementService: AssignementService
  ) {}
  ngOnInit(): void {}
  OnLogin(event: any) {
    console.log('login');
    if (!this.authService.loggedIn) {
      console.log('if statement');
      this.authService.logIn();
    } else {
      console.log('else statement');
      this.authService.logOut();
    }
    this.router.navigate(['/home']);
  }
}
