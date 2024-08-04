import { Component } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [UsersComponent],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent {
  loadData: boolean = false;
  showData: boolean = false;

  onPrefetch() {
    this.loadData = true;
  }
  onDisplay() {
    this.showData = true;
  }
}
