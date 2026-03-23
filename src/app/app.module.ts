import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioSummaryComponent } from './portfolio-summary-component/portfolio-summary-component.component';
import { InvestmentGoalComponent } from './investment-goal/investment-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioSummaryComponent,
    InvestmentGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
