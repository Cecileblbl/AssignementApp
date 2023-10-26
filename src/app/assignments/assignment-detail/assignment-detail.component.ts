import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';

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

  @Output() deleteAssignment = new EventEmitter<Assignment>();

  onDeleteAssignment() {
    this.deleteAssignment.emit(this.assignmentTransmis);
  }
}
