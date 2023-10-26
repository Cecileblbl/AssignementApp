import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignementService } from '../shared/assignement.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  titre = "Formulaire d'ajout de devoir";
  color = 'green';
  id = 'monParagraphe';
  boutonDesactive = true;
  assignments?: Assignment[];
  constructor(private assignmentService: AssignementService) {}

  // pour afficher tantot le formulaire,
  // tantot la liste des assignments
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

  getDescription() {
    return 'Je suis un sous composant';
  }

  getColor(a: any) {
    if (a.rendu) return 'green';
    else return 'red';
  }

  assignmentClique(a: Assignment) {
    this.assignmentSelectionne = a;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  onNouvelAssignment(event: Assignment) {
    this.assignmentService
      .addAssignment(event)
      .subscribe((message) => console.log(message));
    this.formVisible = false;
  }

  onDeleteAssignment(assignment: Assignment) {
    const index = this.assignments?.indexOf(assignment);
    if (index !== undefined && index !== -1 && this.assignments) {
      this.assignments.splice(index, 1);
    }
  }
}
