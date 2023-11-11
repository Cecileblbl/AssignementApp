import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignementService } from 'src/app/shared/assignement.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  nomDevoir = '';
  dateDeRendu?: Date = undefined;

  constructor(
    private assignementService: AssignementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}
  onSubmit(event: any) {
    console.log('onSubmit');
    let a = new Assignment();
    a.nom = this.nomDevoir;
    if (this.dateDeRendu) a.dateDeRendu = this.dateDeRendu;

    a.rendu = false;

    this.assignementService
      .addAssignment(a)
      .subscribe((message) => console.log(message));

    this.router.navigate(['/assignment']);
  }
}
