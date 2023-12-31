import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  AName = '';
  dateDeRendu?: Date = undefined;

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
    if (this.dateDeRendu) a.dateDeRendu = this.dateDeRendu;
    a.rendu = false;
    a.id = Math.floor(Math.random() * 100000000000000000);
    console.log(a);

    this.assignmentService
      .addAssignment(a)
      .subscribe((response) => console.log(response.message));

    this.router.navigate(['/assignment']);
  }
}
