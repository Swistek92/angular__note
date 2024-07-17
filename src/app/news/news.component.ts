import { Component } from '@angular/core';
import { EmployeeService } from '../dependencies/employee.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  employees: any[];
  empId: number = 0;
  emp: any;

  constructor(private e: EmployeeService) {
    this.employees = e.getEmployees();
  }

  showDetails(employeeId: number) {
    this.empId = employeeId;
    this.emp = this.e.getEmployeeById(this.empId);
  }
}
