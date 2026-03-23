import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentGoalComponent } from './investment-goal.component';

describe('InvestmentGoalComponent', () => {
  let component: InvestmentGoalComponent;
  let fixture: ComponentFixture<InvestmentGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
