import { Injectable } from '@angular/core';
import { PowerService } from './power.service';
@Injectable()
export class CubeService {
  constructor(public PowerService: PowerService) {}

  calculateCube(value: number): number {
    return this.PowerService.calculatePower(value, 3);
  }
}
