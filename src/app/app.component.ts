import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { LoopComponent } from './components/loop/loop.component';
import { TestComponent } from './components/test/test.component';
import { DeferComponent } from './components/defer/defer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './components/data/data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    FormComponent,
    LoopComponent,
    TestComponent,
    DeferComponent,
    DataComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
