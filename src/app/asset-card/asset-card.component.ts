import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.scss']
})
export class AssetCardComponent {
  @Input() title: string = '';
  @Input() amount: number = 0;
  @Input() icon: string = '';
  @Input() growth: number = 0;
  @Input() items: number = 0;
  
  getIconColor(): string {
    const colors: {[key: string]: string} = {
      'savings': '#4caf50',
      'trending_up': '#2196f3',
      'pie_chart': '#ff9800',
      'account_balance': '#9c27b0'
    };
    return colors[this.icon] || '#666';
  }
}
