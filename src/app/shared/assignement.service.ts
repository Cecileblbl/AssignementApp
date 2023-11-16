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
      id: 1,
      name: 'Devoir Angular de Buffa',
      dueDate: new Date('2023-09-30'),
      submitted: false,
    },
    {
      id: 2,
      name: 'Devoir SQL de Mopolo',
      dueDate: new Date('2023-10-30'),
      submitted: false,
    },
    {
      id: 3,
      name: 'Devoir gestion de Tunsi',
      dueDate: new Date('2023-08-30'),
      submitted: true,
    },
  ];

  constructor(private loggingService: LoggingService) {}

  getAssignment(id: any): Observable<Assignment> {
    id = Number(id);
    const a: Assignment | undefined = this.assignments.find(
      (assignment) => assignment.id === id
    );
    if (!a) {
      throw new Error(`No assignment found with id: ${id}`);
    }
    return of(a);
  }

  getAssignments: () => Observable<Assignment[]> = () => {
    return of(this.assignments);
  };

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of('Assignment added !');
    //   this.loggingService.log(assignment.name, 'ajouté');
    //
  }
  updateAssignment(assignment: Assignment): Observable<string> {
    if (!assignment) {
      return of('Assignement service: No assignment was selected');
    }
    assignment.submitted = true;
    return of('Assignement service: Assignment updated');
  }
  deleteAssignment(assignment: Assignment): Observable<string> {
    if (!assignment) {
      return of('Assignement service: No assignment was selected');
    }
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    return of('Assignement service: assignement deleted');
  }
}
