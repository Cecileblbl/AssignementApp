import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from './assignment.model';

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

  constructor() {}

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }
}
