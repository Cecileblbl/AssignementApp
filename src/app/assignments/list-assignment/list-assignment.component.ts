import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignementService } from 'src/app/shared/assignement.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private assignmentService: AssignementService) {}

  formVisible = false;

  assignmentSelectionne?: Assignment;

  ngOnInit() {
    console.log(' AVANT RENDU DE LA PAGE !');
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
    if (a.rendu) return 'green';
    else return 'red';
  }

  assignmentClique(a: Assignment) {
    this.assignmentSelectionne = a;
  }
}
