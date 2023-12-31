import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  assignments: Assignment[] = [];

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) {}

  getAssignment(id: any): Observable<Assignment | undefined> {
    return this.http.get<Assignment>(this.url + '/' + id);
  }
  url = 'http://localhost:8010/api/assignments';
  getAssignments: () => Observable<Assignment[]> = () => {
    return this.http.get<Assignment[]>(this.url);
    // return of(this.assignments);
  };

  addAssignment(assignment: Assignment): Observable<any> {
    return this.http.post<Assignment>(this.url, assignment);
  }
  updateAssignment(assignment: Assignment): Observable<string> {
    if (!assignment) {
      return of('Assignment service: No assignment was selected');
    }
    assignment.rendu = true;
    return of('Assignment service: Assignment updated');
  }
  deleteAssignment(assignment: Assignment): Observable<string> {
    if (!assignment) {
      return of('Assignment service: No assignment was selected');
    }
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    return of('Assignment service: assignment deleted');
  }
}
