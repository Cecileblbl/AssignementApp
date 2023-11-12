import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AssignementService } from 'src/app/shared/assignement.service';
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
    console.log('Assignement detail');
    this.getAssignment();
  }

  @Input()
  assignmentTransmis?: Assignment;

  constructor(
    private assignementService: AssignementService,
    private route: ActivatedRoute,
    private router: Router,
    private AuthService: AuthService
  ) {}

  onClickEdit() {
    this.router.navigate(['/assignment', this.assignmentTransmis?.id, 'edit'], {
      queryParams: { nom: this.assignmentTransmis?.nom },
      fragment: 'edition',
    });
  }

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
    this.router.navigate(['/assignment']);
  }
  onUpdateAssignments(event: Assignment) {
    this.assignementService
      .updateAssignment(event)
      .subscribe((message) => console.log(message));
    this.router.navigate(['/assignment']);
  }
  isAdmin() {
    return this.AuthService.isAdmin();
  }
}
