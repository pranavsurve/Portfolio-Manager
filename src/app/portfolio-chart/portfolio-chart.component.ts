import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-chart',
  templateUrl: './portfolio-chart.component.html',
  styleUrls: ['./portfolio-chart.component.css']
})
export class PortfolioChartComponent implements AfterViewInit {
  performanceData = [
    { month: 'Jan', value: 4200000 },
    { month: 'Feb', value: 4300000 },
    { month: 'Mar', value: 4250000 },
    { month: 'Apr', value: 4400000 },
    { month: 'May', value: 4500000 },
    { month: 'Jun', value: 4587000 }
  ];

  ngAfterViewInit() {
    // In a real application, you would initialize a chart library here
    // For example: Chart.js, D3.js, or Angular Charts
    this.simulateChartAnimation();
  }

  simulateChartAnimation() {
    // Simulate chart animation
    setTimeout(() => {
      const bars = document.querySelectorAll('.chart-bar');
      bars.forEach((bar: any, index) => {
        setTimeout(() => {
          bar.style.transform = 'scaleY(1)';
        }, index * 100);
      });
    }, 500);
  }

  getMaxValue(): number {
    return Math.max(...this.performanceData.map(d => d.value));
  }

  getBarHeight(value: number): string {
    const max = this.getMaxValue();
    return `${(value / max) * 100}%`;
  }
}
