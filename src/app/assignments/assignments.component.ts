import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})

export class AssignmentsComponent implements OnInit {
  
  ajoutActive = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }
  titre = 'Mon application sur les Assignments !';
  assignments = [
    {nom:"TP1 sur Webdev", 
    dateDeRendu:new Date('2021-03-15'),
    rendu : true},
    {nom:"TP2 sur angular",
    dateDeRendu:new Date('2021-03-22'),
    rendu : false},
    {nom:"TP3 Management de projet",
    dateDeRendu:new Date('2021-03-29'),
    rendu : false}
  ];
  onSubmit(event:any) {
    console.log(event);
 //event.preventDefault();
  }
 
}
