import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent {
  ngOnInit(): void {
    console.log('Assignment detail');
    this.getAssignment();
  }

  @Input()
  ASent?: Assignment;

  constructor(
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router,
    private AuthService: AuthService
  ) {}

  onClickEdit() {
    this.router.navigate(['/assignment', this.ASent?.id, 'edit'], {
      queryParams: { name: this.ASent?.name },
      fragment: 'modifying',
    });
  }

  getAssignment() {
    const id = this.route.snapshot.params['id'];
    this.assignmentService
      .getAssignment(id)
      .subscribe((assignment) => (this.ASent = assignment));
  }

  onDeleteAssignment(event: Assignment) {
    this.assignmentService
      .deleteAssignment(event)
      .subscribe((message) => console.log(message));
    this.router.navigate(['/assignment']);
  }
  onUpdateAssignments(event: Assignment) {
    this.assignmentService
      .updateAssignment(event)
      .subscribe((message) => console.log(message));
    this.router.navigate(['/assignment']);
  }
  isAdmin() {
    return this.AuthService.isAdmin();
  }
}
