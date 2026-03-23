import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { InvestmentGoalComponent } from './investment-goal/investment-goal.component';
import { PortfolioChartComponent } from './portfolio-chart/portfolio-chart.component';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioSummaryComponent,
    InvestmentGoalComponent,
    PortfolioChartComponent,
    AssetCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
