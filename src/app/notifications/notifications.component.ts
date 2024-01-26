import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Assignment } from '../assignments/assignment.model';

export interface DialogData {}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent {
  assignments: Assignment[]; // Ajoutez cette ligne

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<NotificationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NotificationsComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('La boîte de dialogue a été fermée');
      // Vous pouvez utiliser le résultat ici
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
