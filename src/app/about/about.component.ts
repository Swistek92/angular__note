import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  employee = [
    { id: 1, name: 'lalla1' },
    { id: 2, name: 'lalla2' },
    { id: 3, name: 'lalla3' },
    { id: 4, name: 'lalla4' },
  ];
}
