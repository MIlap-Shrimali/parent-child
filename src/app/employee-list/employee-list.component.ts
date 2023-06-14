import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class EmployeeListComponent {
  // employees: any[] = [
  //   { name: 'John Doe', designation: 'Angular Developer', salary: 5000 },
  //   { name: 'Jane Smith', designation: 'Java Developer', salary: 6000 },
  //   // Add more dummy records here
  // ];
// Inside the EmployeeListComponent class
employees: any[] = [
  { name: 'John Doe', designation: 'Angular Developer', salary: 5000 },
  { name: 'Jane Smith', designation: 'Java Developer', salary: 6000 },
  { name: 'Alex Johnson', designation: 'Angular Developer', salary: 5500 },
  { name: 'Emily Davis', designation: 'Java Developer', salary: 6500 },
  { name: 'Michael Brown', designation: 'Angular Developer', salary: 5200 },
  { name: 'Sarah Wilson', designation: 'Java Developer', salary: 6200 },
];

  angularDeveloperCount: number = 5;
  javaDeveloperCount: number = 4;
}
