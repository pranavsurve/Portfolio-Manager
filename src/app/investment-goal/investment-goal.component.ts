import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investment-goal',
  templateUrl: './investment-goal.component.html',
  styleUrls: ['./investment-goal.component.scss']
})
export class InvestmentGoalComponent {
  goalForm: FormGroup;
  calculatedResult: any = null;
  annualReturnRate = 8; // Default annual return rate
  
  goals = [
    { name: 'Retirement', target: 5000000, current: 2500000, years: 15, icon: 'elderly' },
    { name: 'House Purchase', target: 3000000, current: 800000, years: 5, icon: 'house' },
    { name: 'Education Fund', target: 1500000, current: 400000, years: 10, icon: 'school' }
  ];

  constructor(private fb: FormBuilder) {
    this.goalForm = this.fb.group({
      goalName: ['', Validators.required],
      targetAmount: ['', [Validators.required, Validators.min(1000)]],
      currentAmount: ['', [Validators.required, Validators.min(0)]],
      targetYear: ['', [Validators.required, Validators.min(new Date().getFullYear() + 1)]],
      annualReturn: [this.annualReturnRate, [Validators.min(0), Validators.max(30)]]
    });
  }

  calculateInvestment() {
    if (this.goalForm.valid) {
      const formData = this.goalForm.value;
      const years = formData.targetYear - new Date().getFullYear();
      const futureValue = formData.targetAmount - formData.currentAmount;
      const rate = formData.annualReturn / 100;
      
      // Calculate annual investment needed using future value of annuity formula
      // FV = P * [(1 + r)^n - 1] / r
      // P = FV * r / [(1 + r)^n - 1]
      const annualInvestment = futureValue * rate / (Math.pow(1 + rate, years) - 1);
      const monthlyInvestment = annualInvestment / 12;
      
      this.calculatedResult = {
        annualInvestment: Math.round(annualInvestment),
        monthlyInvestment: Math.round(monthlyInvestment),
        totalYears: years,
        totalInvestment: Math.round(annualInvestment * years),
        expectedValue: Math.round(formData.currentAmount + (annualInvestment * (Math.pow(1 + rate, years) - 1) / rate))
      };
    }
  }

  getGoalProgress(goal: any): number {
    return (goal.current / goal.target) * 100;
  }
}
