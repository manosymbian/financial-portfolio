import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  investmentData$ = signal({} as InvestmentData[]);
  httpClient = inject(HttpClient);

  getInvestmentData() {
    this.httpClient.get<InvestmentData[]>("http://localhost:3000/data").subscribe({
      next: (response: InvestmentData[]) => {
        this.investmentData$.set(response);
      },
      error: (error: HttpErrorResponse) => {
        console.log("API error", error);        
      }
    })
  }

  addInvestmentData(formData: InvestmentData) {
    return this.httpClient.post<InvestmentData>("http://localhost:3000/data", formData);
  }
}
