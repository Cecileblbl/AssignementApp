import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
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
    console.log('addAssignment: ' + JSON.stringify(assignment));
    return this.http.post<Assignment>(this.url, assignment);
  }

  updateAssignment(assignment: Assignment): Observable<any> {
    return this.http.put<Assignment>(this.url, assignment);
  }
  deleteAssignment(assignment: Assignment): Observable<any> {
    return this.http.delete<string>(`${this.url}/${assignment._id}`);
  }
}
