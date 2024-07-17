import { Injectable } from '@angular/core';

@Injectable()
export class LogMesage2Service {
  constructor() {}

  log(): void {
    console.log('this is service 2 ');
  }
}
