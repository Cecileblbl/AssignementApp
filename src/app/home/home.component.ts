import { Component, OnInit, Inject } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Chart options
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };
  // Chart labels
  public doughnutChartLabels = ['Unsubmitted', 'Submitted'];
  // Chart datasets
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{ data: [0, 0], label: 'Assignments' }];

  // Number of unsubmitted assignments
  unsubmittedAssignments: number;

  constructor(
    // Injecting the assignment service
    @Inject(AssignmentService) private assignmentService: AssignmentService
  ) {}

  ngOnInit() {
    // On component initialization, get the assignments
    this.assignmentService.getAssignments().subscribe((assignments) => {
      // Calculate the number of submitted assignments
      const submitted = assignments.filter(
        (assignment) => assignment.submitted
      ).length;
      // Calculate the number of unsubmitted assignments
      const unsubmitted = assignments.length - submitted;
      // Update the chart datasets
      this.doughnutChartDatasets = [{ data: [unsubmitted, submitted] }];
    });
    // Get the assignments again to calculate the number of unsubmitted assignments
    this.assignmentService.getAssignments().subscribe((assignments) => {
      this.unsubmittedAssignments = assignments.filter(
        (assignment) => !assignment.submitted
      ).length;
    });
  }
}
