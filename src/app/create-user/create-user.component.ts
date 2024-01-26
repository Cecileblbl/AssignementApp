import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/shared/assignement.service';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  createUserForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required],
  });

  roles = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'user', viewValue: 'User' },
  ];

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private AssignmentService: AssignmentService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}
  onCreateUser() {
    let user = new User();
    user.username = this.createUserForm.value.username;
    user.password = this.createUserForm.value.password;
    user.role = this.createUserForm.value.role;
    this.authService.createUser(user).subscribe((res) => {
      this.toastr.success('User Created Successfully', 'Success');
      this.router.navigate(['/home']);
    });
  }
}
