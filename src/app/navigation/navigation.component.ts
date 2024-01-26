import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  opened = false;
  ngOnInit(): void {
    console.log('Navigation');
  }

  constructor(public authService: AuthService, public dialog: MatDialog) {}

  get isLogged(): boolean {
    return this.authService.loggedIn;
  }
  get isAdmin(): boolean {
    return this.authService.admin;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NotificationsComponent, {
      width: '250px',
      data: {
        /* les données que vous voulez passer à la boîte de dialogue */
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('La boîte de dialogue a été fermée');
      // Vous pouvez utiliser le résultat ici
    });
  }
}
