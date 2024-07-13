import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Courses } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  // @Input() message: string = '';
  @Input() data: Courses = [];
  @Output() myEvent = new EventEmitter();

  emitEvent() {
    this.myEvent.emit(' event emitted lalala');
  }
  // @Input() inputValue: string = '';
  // previousVal: string | undefined;
  // currentVal: string | undefined;

  // ngOnChanges(changes: SimpleChanges): void {
  //   const changesInputVal = changes['inputValue'];

  //   if (changesInputVal) {
  //     this.previousVal = changesInputVal.previousValue;
  //     this.currentVal = changesInputVal.currentValue;
  //     console.log(changes);
  //   }

  //   console.log('calling from on change ');
  //   console.log(this.inputValue);
  //   console.log(changes);
  // }
}
