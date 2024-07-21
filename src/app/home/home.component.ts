import { Component } from '@angular/core';
import { ButtonClickService } from '../services/button-click.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private btnService: ButtonClickService) {}

  enableRoutes() {
    this.btnService.setButtonClicked();
  }
  clicked() {
    return this.btnService.isButtonClicked();
  }
}
