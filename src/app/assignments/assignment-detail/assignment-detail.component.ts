import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AssignementService } from 'src/app/shared/assignement.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent {
  ngOnInit(): void {
    console.log('Assignement detail');
    this.getAssignment();
  }

  @Input()
  assignmentTransmis?: Assignment;

  constructor(
    private assignementService: AssignementService,
    private route: ActivatedRoute
  ) {}

  getAssignment() {
    const id = this.route.snapshot.params['id'];
    this.assignementService
      .getAssignment(id)
      .subscribe((assignment) => (this.assignmentTransmis = assignment));
  }

  onDeleteAssignment(event: Assignment) {
    this.assignementService
      .deleteAssignment(event)
      .subscribe((message) => console.log(message));
  }
  onUpdateAssignments(event: Assignment) {
    this.assignementService
      .updateAssignment(event)
      .subscribe((message) => console.log(message));
  }
}
