import { Component, OnInit, ViewChild } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from 'src/app/shared/assignement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';

@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.component.html',
  styleUrls: ['./list-assignment.component.css'],
})
export class ListAssignmentComponent {
  titre = "Formulaire d'ajout de devoir";
  color = 'green';
  id = 'monParagraphe';
  boutonDesactive = true;
  assignments?: Assignment[];
  dataSource: any;
  displayedColumns: string[] = [
    'nom',
    'dateDeRendu',
    'rendu',
    'auteur',
    'note',
    'nomMatiere',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private assignmentService: AssignmentService,
    private authService: AuthService
  ) {}

  formVisible = false;
  LoggedIn = false;

  assignmentSelectionne?: Assignment;

  ngOnInit() {
    console.log(' AVANT RENDU DE LA PAGE !');
    this.assignmentService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
      this.dataSource = new MatTableDataSource<Assignment>(this.assignments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getAssignments() {
    this.assignmentService
      .getAssignments()
      .subscribe((assignments) => (this.assignments = assignments));
  }

  getColor(a: any) {
    if (a.rendu) return 'green';
    else return 'red';
  }

  assignmentClique(a: Assignment) {
    this.assignmentSelectionne = a;
    console.log('assignmentClique:' + a.nom);
  }
  isLoggedin() {
    return this.authService.isLoggedIn();
  }
}
