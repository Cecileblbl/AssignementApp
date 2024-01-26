import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/shared/assignement.service';
import { Assignment } from '../assignment.model';

interface matiere {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignment | undefined;
  nomAssignment!: string;
  dateDeRendu!: Date;
  remarques!: string;
  auteur!: string;
  nomMatiere!: string;
  note!: number;
  rendu!: boolean;
  selectedrendu: boolean;
  selectedValue: string;

  updateRendu(value: string) {
    this.selectedrendu = value === 'true' ? true : false;
  }

  isRenduTrue() {
    return this.selectedrendu === true;
  }

  matieres: matiere[] = [
    { value: 'Communication', viewValue: 'Communication' },
    { value: 'WebDev', viewValue: 'WebDev' },
    { value: 'Mathematiques', viewValue: 'Mathematiques' },
    { value: 'SGBD', viewValue: 'SGDB' },
    { value: 'OIB', viewValue: 'OIB' },
    { value: 'Management', viewValue: 'Management' },
  ];

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
    console.log('on est dans le getAssignment');
    console.log(this.route.snapshot.params['id']);
    const id = +this.route.snapshot.params['id'];

    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      if (!assignment) return;
      this.assignment = assignment;
      this.nomAssignment = assignment.nom;
      this.dateDeRendu = assignment.dateDeRendu;
      this.rendu = assignment.rendu;
      this.selectedrendu = assignment.rendu;
      this.remarques = assignment.remarques;
      this.auteur = assignment.auteur;
      this.nomMatiere = assignment.nomMatiere;
      this.note = assignment.note;
      this.auteur = assignment.auteur;
    });
  }
  onSaveAssignment() {
    if (!this.assignment) return;

    // on récupère les valeurs dans le formulaire
    this.assignment.nom = this.nomAssignment;
    this.assignment.dateDeRendu = this.dateDeRendu;
    this.assignment.rendu = this.selectedrendu;
    this.assignment.remarques = this.remarques;
    this.assignment.auteur = this.auteur;
    this.assignment.nomMatiere = this.nomMatiere;
    this.assignment.note = this.note;
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((response) => {
        console.log(response.message);

        // navigation vers la home page
        this.router.navigate(['/assignment']);
      });
  }
}
