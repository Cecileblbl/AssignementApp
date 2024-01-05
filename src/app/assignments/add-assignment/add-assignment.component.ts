import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignement.service';
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
    private AssignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}
  onSubmit(event: any) {
    console.log('onSubmit');

    let a = new Assignment();
    console.log('new assignement' + a);
    a.id = Math.floor(Math.random() * 100000000000000000);
    a.nom = this.nomDevoir;
    if (this.dateDeRendu) a.dateDeRendu = this.dateDeRendu;
    a.rendu = false;

    this.AssignmentService.addAssignment(a).subscribe((response) =>
      console.log(response.message)
    );
    console.log('new assignment' + JSON.stringify(a));

    this.router.navigate(['/assignment']);
  }
}
