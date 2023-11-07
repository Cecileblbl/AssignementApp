import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignementService } from 'src/app/shared/assignement.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent {
  ngOnInit(): void {}

  @Input()
  assignmentTransmis?: Assignment;

  constructor() {}

  @Output() deletedAssignment = new EventEmitter<Assignment>();
  @Output() updatedAssignment = new EventEmitter<Assignment>();

  del() {
    this.deletedAssignment.emit(this.assignmentTransmis);
    this.assignmentTransmis = null;
  }
  rendu() {
    this.updatedAssignment.emit(this.assignmentTransmis);
  }
}
