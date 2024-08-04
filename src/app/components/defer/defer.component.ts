import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [TestComponent, UsersComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css',
})
export class DeferComponent {}
