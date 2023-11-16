import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

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
  constructor(
    private assignmentService: AssignmentService,
    private authService: AuthService
  ) {}

  formVisible = false;
  LoggedIn = false;

  selectedAssignment?: Assignment;

  ngOnInit() {
    console.log(' Page loading ');
    this.assignmentService
      .getAssignments()
      .subscribe((assignments) => (this.assignments = assignments));
  }

  getAssignments() {
    this.assignmentService
      .getAssignments()
      .subscribe((assignments) => (this.assignments = assignments));
  }

  getColor(a: any) {
    if (a.submitted) return 'green';
    else return 'red';
  }

  assignmentClique(a: Assignment) {
    this.selectedAssignment = a;
  }
  isLoggedin() {
    return this.authService.isLoggedIn();
  }
}
