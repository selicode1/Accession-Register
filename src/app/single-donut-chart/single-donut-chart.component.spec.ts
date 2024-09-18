import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDonutChartComponent } from './single-donut-chart.component';

describe('SingleDonutChartComponent', () => {
  let component: SingleDonutChartComponent;
  let fixture: ComponentFixture<SingleDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDonutChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
