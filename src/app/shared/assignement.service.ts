import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class AssignementService {
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

  constructor(private loggingService: LoggingService) {}

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of('assignement ajouté');
    this.loggingService.log(assignment.nom, 'ajouté');
  }
  updateAssignment(assignment: Assignment): Observable<string> {
    if (!assignment) {
      return of("Assignement service: pas d'assignement sélectionné");
    }
    assignment.rendu = true;
    return of('Assignement service: assignement modifié');
  }
  deleteAssignment(assignment: Assignment): Observable<string> {
    if (!assignment) {
      return of("Assignement service: pas d'assignement sélectionné");
    }
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    return of('Assignement service: assignement supprimé');
  }
}
