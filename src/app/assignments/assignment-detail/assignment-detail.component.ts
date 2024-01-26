import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignement.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import matieres from '../../../shared/matieres.json';
@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent {
  matiereData: any = matieres;

  get isAdmin(): boolean {
    return this.authService.admin;
  }
  get isLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  ngOnInit(): void {
    console.log('Assignement detail');
    this.getAssignment();
    console.log(this.matiereData);
    console.log('IS AMDIN : ' + this.isAdmin);
    console.log('IS LOGGED IN : ' + this.authService.loggedIn);
  }

  @Input()
  assignmentTransmis?: Assignment;

  constructor(
    private AssignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) {}

  onClickEdit() {
    if (this.authService.loggedIn == false) {
      console.log(
        'Vous n êtes pas authentifié ! Navigation refusée par le edit() !'
      );
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(
        ['/assignment', this.assignmentTransmis?.id, 'edit'],
        {
          queryParams: { nom: this.assignmentTransmis?.nom },
          fragment: 'edition',
        }
      );
    }
  }

  getMatiereData(nomMatiere: string) {
    let row = this.matiereData.filter((row: any) => row.nom === nomMatiere);
    console.log('matiere data: ' + JSON.stringify(row));
    return row;
  }

  getAssignment() {
    const id = this.route.snapshot.params['id'];
    this.AssignmentService.getAssignment(id).subscribe(
      (assignment) => (this.assignmentTransmis = assignment)
    );
  }

  onDeleteAssignment(event: Assignment) {
    if (this.authService.admin == true) {
      this.AssignmentService.deleteAssignment(event).subscribe((response) => {
        console.log(response.message);
        this.router.navigate(['/assignment']);
      });
    }
  }
  onUpdateAssignments(event: Assignment) {
    this.AssignmentService.updateAssignment(event).subscribe((response) =>
      console.log(response.message)
    );
    this.router.navigate(['/assignment']);
  }
  // isAdmin() {
  //   console.log('isAdmin' + this.authService.isAdmin());
  //   return this.authService.isAdmin();
  // }
}
