import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  
  ajoutActive = false;
  titre = 'Mon application sur les Assignments !';
  nomDevoir: string = '';
  dateDeRendu: Date = new Date();

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }
  assignments: Assignment[] = [
    {
      nom: 'Devoir Angular de Buffa',
      dateDeRendu: new Date('2023-09-30'),
      rendu: false,
    },
    {
      nom: 'Devoir SQL de Mopolo',
      dateDeRendu: new Date('2023-10-30'),
      rendu: false,
    },
    {
      nom: 'Devoir gestion de Tunsi',
      dateDeRendu: new Date('2023-08-30'),
      rendu: true,
    },
  ];
  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
  }
  assignmentSelectionne!:Assignment;
  assignmentClique(assignment:Assignment) {
     this.assignmentSelectionne = assignment;
   }
}
