import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-loop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loop.component.html',
  styleUrl: './loop.component.css',
})
export class LoopComponent {
  employeeRole: string = '';

  employees = signal<empInterface[]>([
    { id: 1, name: 'EmployeeA', role: 'Admin' },
    { id: 2, name: 'EmployeeB', role: 'HR' },
    { id: 3, name: 'EmployeeC', role: 'Marketing' },
    { id: 4, name: 'EmployeeD', role: 'Developer' },
    { id: 5, name: 'EmployeeE', role: 'Marketing' },
    { id: 6, name: 'EmployeeF', role: 'Marketing' },
    { id: 7, name: 'EmployeeG', role: 'Developer' },
    { id: 8, name: 'EmployeeH', role: 'Developer' },
    { id: 9, name: 'EmployeeI', role: 'Analyst' },
    { id: 10, name: 'EmployeeJ', role: 'Analyst' },
  ]);
}
