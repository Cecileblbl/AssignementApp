import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  AName = '';
  dueDate?: Date = undefined;

  constructor(
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}
  onSubmit(event: any) {
    console.log('onSubmit');
    let a = new Assignment();
    a.name = this.AName;
    if (this.dueDate) a.dueDate = this.dueDate;
    a.submitted = false;

    this.assignmentService
      .addAssignment(a)
      .subscribe((message) => console.log(message));

    this.router.navigate(['/assignment']);
  }
}
