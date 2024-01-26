import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  username: string = '';
  role: string = '';
  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserName();
    this.getUserRole();
  }

  getUserName(): string {
    this.username = this.authService.currentUser.username;
    return this.authService.currentUser.username;
  }
  getUserRole(): string {
    this.role = this.authService.currentUser.role;
    return this.authService.currentUser.role;
  }

  logout() {
    this.authService.logOut();
    this.toastr.success('Déconnecté');
    this.router.navigate(['/home']);
  }
}
