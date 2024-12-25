import { Component, effect, inject, ViewChild } from '@angular/core';
import { InvestmentService } from '../../service/investment.service';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  investmentService = inject(InvestmentService);
  investmentData!: InvestmentData[];
  isDataAvailable = false;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  constructor() {
    this.updateSignals();
  }
  ngOnInit() {
    this.investmentService.getInvestmentData();
  }

  /**
   * The `updateSignals` function is responsible for updating signals based on the latest investment data
   * The `effect` function reacts to changes in data and executes the provided callback function
          effect(() => {
   */ 
  updateSignals() {
    effect(() => {
      this.investmentData = this.investmentService.investmentData$();
      this.updateInvestmentChart(this.investmentData);
    });
  }

  /**
   * 
   * @param investmentData investment data from BE or mock data
   * Updates chart option with recent data
   */
  updateInvestmentChart(investmentData: InvestmentData[]) {
    const chartData: any =
      investmentData.length &&
      investmentData.reduce((acc, { assetType, quantity }) => {
        if (!acc[assetType]) {
          acc[assetType] = 0;
        }
        acc[assetType] += quantity;
        return acc;
      }, {} as any);
    this.chartOptions = {
      series: Object.values(chartData),
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: Object.keys(chartData),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    this.isDataAvailable = true;
  }
}

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
