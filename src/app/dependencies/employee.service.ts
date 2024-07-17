import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // constructor() { }

  private employes = [
    {
      id: 1,
      name: 'aa',
      depart: 'admin',
      location: 'zurych',
      phone: '123-123-123',
    },
    {
      id: 2,
      name: 'aa',
      depart: 'admin',
      location: 'zurych',
      phone: '123-123-123',
    },
    {
      id: 3,
      name: 'aa',
      depart: 'admin',
      location: 'zurych',
      phone: '123-123-123',
    },
    {
      id: 4,
      name: 'aa',
      depart: 'admin',
      location: 'zurych',
      phone: '123-123-123',
    },
  ];

  getEmployees() {
    return this.employes;
  }
  getEmployeeById(id: number) {
    return this.employes.find((e) => e.id === id);
  }
}
