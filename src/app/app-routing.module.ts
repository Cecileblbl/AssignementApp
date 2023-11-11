import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { authGuard } from './shared/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListAssignmentComponent } from './assignments/list-assignment/list-assignment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'assignment',
    component: AssignmentsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListAssignmentComponent },
      { path: 'add', component: AddAssignmentComponent },
      { path: ':id', component: AssignmentDetailComponent },
      {
        path: ':id/edit',
        component: EditAssignmentComponent,
        canActivate: [authGuard],
      },
    ],
  },
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
