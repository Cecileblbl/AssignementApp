import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignementService } from 'src/app/shared/assignement.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  // Evenement qu'on enverra au père avec la soumission
  // du formulaire
  // @Output() nouvelAssignment = new EventEmitter<Assignment>();

  // pour le formulaire
  nomDevoir = '';
  dateDeRendu?: Date = undefined;

  constructor(private assignementService: AssignementService) {}
  ngOnInit(): void {}
  onSubmit(event: any) {
    let a = new Assignment();
    a.nom = this.nomDevoir;
    if (this.dateDeRendu) a.dateDeRendu = this.dateDeRendu;

    a.rendu = false;

    this.assignementService
      .addAssignment(a)
      .subscribe((message) => console.log(message));
  }
}
