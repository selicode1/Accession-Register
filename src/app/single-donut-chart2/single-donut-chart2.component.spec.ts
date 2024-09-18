import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDonutChart2Component } from './single-donut-chart2.component';

describe('SingleDonutChart2Component', () => {
  let component: SingleDonutChart2Component;
  let fixture: ComponentFixture<SingleDonutChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDonutChart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDonutChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
