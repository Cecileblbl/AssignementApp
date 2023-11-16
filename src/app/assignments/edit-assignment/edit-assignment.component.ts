import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignment | undefined;
  AName!: string;
  dueDate!: Date;

  constructor(
    private assignmentsService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAssignment();

    //affichage des queryParam et fragment
    console.log('query Params :' + this.route.snapshot.queryParams);
    console.log('query Fragment :' + this.route.snapshot.fragment);
  }
  getAssignment() {
    console.log('getAssignment function in edit-assignmen');
    console.log(this.route.snapshot.params['id']);
    const id = +this.route.snapshot.params['id'];

    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      if (!assignment) return;
      this.assignment = assignment;
      // To fill the form with the values of the assignment
      this.AName = assignment.name;
      this.dueDate = assignment.dueDate;
    });
  }
  onSaveAssignment() {
    if (!this.assignment) return;

    // To update the values of the assignment
    this.assignment.name = this.AName;
    this.assignment.dueDate = this.dueDate;
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((message) => {
        console.log(message);

        // Navigate to the list of assignments
        this.router.navigate(['/assignment']);
      });
  }
}
