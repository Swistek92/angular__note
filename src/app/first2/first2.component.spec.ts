import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First2Component } from './first2.component';

describe('First2Component', () => {
  let component: First2Component;
  let fixture: ComponentFixture<First2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [First2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
