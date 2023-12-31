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
  public doughnutChartLabels = ['Unrendu', 'rendu'];
  // Chart datasets
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{ data: [0, 0], label: 'Assignments' }];

  // Number of unrendu assignments
  unrenduAssignments: number;

  constructor(
    // Injecting the assignment service
    @Inject(AssignmentService) private assignmentService: AssignmentService
  ) {}

  ngOnInit() {
    // On component initialization, get the assignments
    this.assignmentService.getAssignments().subscribe((assignments) => {
      // Calculate the number of rendu assignments
      const rendu = assignments.filter((assignment) => assignment.rendu).length;
      // Calculate the number of unrendu assignments
      const unrendu = assignments.length - rendu;
      // Update the chart datasets
      this.doughnutChartDatasets = [{ data: [unrendu, rendu] }];
    });
    // Get the assignments again to calculate the number of unrenduents
    this.assignmentService.getAssignments().subscribe((assignments) => {
      this.unrendunts = assignments.filter(
        (assignment) => !assignment.rendu
      ).length;
    });
  }
}
