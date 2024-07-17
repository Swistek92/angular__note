import { Component } from '@angular/core';
import { CubeService } from '../dependencies/cube.service';
import { PowerService } from '../dependencies/power.service';

@Component({
  selector: 'app-random1',
  templateUrl: './random1.component.html',
  styleUrl: './random1.component.css',
  providers: [CubeService, PowerService],
})
export class Random1Component {
  constructor(public CubeService: CubeService) {}

  calculateCube(): number {
    return this.CubeService.calculateCube(3);
  }
}
