import { Component, OnInit, Inject } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignement.service';
import { ChartConfiguration } from 'chart.js';
import { Assignment } from 'src/app/assignments/assignment.model';

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

  assignments: Assignment[] = [];

  barChartLabels: string[] = []; // Les noms des matières
  barChartDatasets: any[] = [
    {
      data: [], // Les notes moyennes pour chaque matière
      label: 'Note moyenne',
    },
  ];
  barChartOptions: any = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  constructor(
    @Inject(AssignmentService) private assignmentService: AssignmentService
  ) {}
  getAssignments() {
    this.assignmentService
      .getAssignments()
      .subscribe((assignments) => (this.assignments = assignments));
  }
  Doughnutchart() {
    const submitted = this.assignments.filter(
      (assignment) => assignment.rendu
    ).length;
    const unsubmitted = this.assignments.length - submitted;
    this.doughnutChartDatasets = [{ data: [unsubmitted, submitted] }];
    this.unsubmittedAssignments = this.assignments.filter(
      (assignment) => !assignment.rendu
    ).length;
  }

  BARChart() {
    const groupedAndAveraged = this.assignments.reduce(
      (result, assignment) => {
        const existingIndex = result.labels.indexOf(assignment.nomMatiere);

        if (existingIndex === -1) {
          result.labels.push(assignment.nomMatiere);
          result.data.push(assignment.note);
        } else {
          result.data[existingIndex] += assignment.note;
        }
        return result;
      },
      { labels: [], data: [] }
    );
    groupedAndAveraged.data = groupedAndAveraged.data.map(
      (total, index) =>
        total /
        this.assignments.filter(
          (a) => a.nomMatiere === groupedAndAveraged.labels[index]
        ).length
    );
    this.barChartLabels = groupedAndAveraged.labels;
    this.barChartDatasets[0].data = groupedAndAveraged.data;
  }

  isDueToday(assignment: Assignment): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(assignment.dateDeRendu);
    dueDate.setHours(0, 0, 0, 0);
    return today.getTime() === dueDate.getTime();
  }

  ngOnInit() {
    this.assignmentService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
      this.Doughnutchart();
      this.BARChart();
    });
  }
}
