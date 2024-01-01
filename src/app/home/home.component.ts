import { Component, OnInit, Inject } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignement.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };
  public doughnutChartLabels = ['Unsubmitted', 'Submitted'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{ data: [0, 0], label: 'Assignements' }];

  unsubmittedAssignments: number;

  constructor(
    @Inject(AssignmentService) private assignmentService: AssignmentService
  ) {}

  ngOnInit() {
    this.assignmentService.getAssignments().subscribe((assignments) => {
      const submitted = assignments.filter(
        (assignment) => assignment.rendu
      ).length;
      const unsubmitted = assignments.length - submitted;
      this.doughnutChartDatasets = [{ data: [unsubmitted, submitted] }];
    });
    this.assignmentService.getAssignments().subscribe((assignments) => {
      this.unsubmittedAssignments = assignments.filter(
        (assignment) => !assignment.rendu
      ).length;
    });
  }
}
