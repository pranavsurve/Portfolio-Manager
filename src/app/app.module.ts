import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { InvestmentGoalComponent } from './investment-goal/investment-goal.component';
import { PortfolioChartComponent } from './portfolio-chart/portfolio-chart.component';
import { AssetCardComponent } from './asset-card/asset-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioSummaryComponent,
    InvestmentGoalComponent,
    PortfolioChartComponent,
    AssetCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
