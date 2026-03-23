import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.css']
})
export class PortfolioSummaryComponent {
  totalPortfolio = 4587000;
  monthlyGrowth = 2.4;
  yearlyGrowth = 18.7;
  riskLevel = 'Medium';
  
  portfolioDistribution = [
    { name: 'Stocks', value: 41, color: '#4fc3f7' },
    { name: 'FD', value: 27, color: '#4caf50' },
    { name: 'Mutual Funds', value: 22, color: '#ff9800' },
    { name: 'Real Estate', value: 10, color: '#f44336' }
  ];
}
