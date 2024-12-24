import { Component, effect, inject } from '@angular/core';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  investmentService = inject(InvestmentService);
  investmentData!: InvestmentDataSet;

  constructor() {
    this.updateSignals()
  }
  ngOnInit() {
    this.investmentService.getInvestmentData();
  }
 
  updateSignals() {
    effect(() => {
      this.investmentData = this.investmentService.investmentData$();
    })
  }
}

