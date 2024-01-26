import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignement.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { FormArray } from '@angular/forms';

interface matiere {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  nomDevoir = '';
  dateDeRendu?: Date = undefined;
  nomMatiere = '';
  auteur = '';
  remarques = '';
  selectedrendu: boolean = false;
  selectedValue: string;

  updateRendu(value: string) {
    this.selectedrendu = value === 'true' ? true : false;
  }

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
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
    private AssignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}
  formGroup: FormGroup = this.fb.group({ firstCtrl: [''] });
  ngOnInit(): void {
    {
      this.formGroup = this.fb.group({
        formArray: this.fb.array([
          this.fb.group({
            nomDevoir: ['', Validators.required],
          }),
          this.fb.group({
            dateDeRendu: ['', Validators.required],
          }),
          this.fb.group({
            nomMatiere: ['', Validators.required],
          }),
          this.fb.group({
            auteur: ['', Validators.required],
          }),
          this.fb.group({
            rendu: ['', Validators.required],
          }),
          this.fb.group({
            note: [''],
          }),
          this.fb.group({
            remarques: [''],
          }),
        ]),
      });
    }
  }
  onSubmit(event: any) {
    console.log('onSubmit');

    let a = new Assignment();
    console.log('new assignement' + a);
    a.id = Math.floor(Math.random() * 100000000000000000);

    let formArray = this.formGroup.get('formArray') as FormArray;
    let firstFormGroup = formArray.at(0) as FormGroup;
    let nomDevoir = firstFormGroup.get('nomDevoir').value;
    console.log('nomDevoir', nomDevoir);
    a.nom = firstFormGroup.get('nomDevoir').value;

    let secondFormGroup = formArray.at(1) as FormGroup;
    if (secondFormGroup.get('dateDeRendu').value)
      a.dateDeRendu = secondFormGroup.get('dateDeRendu').value;

    let thirdFormGroup = formArray.at(2) as FormGroup;
    a.nomMatiere = thirdFormGroup.get('nomMatiere').value;

    let fourthFormGroup = formArray.at(3) as FormGroup;
    a.auteur = fourthFormGroup.get('auteur').value;

    let fifthFormGroup = formArray.at(4) as FormGroup;
    a.rendu = fifthFormGroup.get('rendu').value;

    let sixthFormGroup = formArray.at(5) as FormGroup;
    if (sixthFormGroup.get('note').value)
      a.note = sixthFormGroup.get('note').value;

    let seventhFormGroup = formArray.at(6) as FormGroup;
    if (seventhFormGroup.get('remarques').value)
      a.remarques = seventhFormGroup.get('remarques').value;

    this.AssignmentService.addAssignment(a).subscribe((response) =>
      console.log(response.message)
    );
    console.log('new assignment' + JSON.stringify(a));

    this.router.navigate(['/assignment']);
  }
}
