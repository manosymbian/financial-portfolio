import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.scss'
})
export class InvestmentComponent {
  investmentService = inject(InvestmentService);

  investmentForm!: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.investmentForm = new FormGroup({
      assetType: new FormControl('', { validators: [Validators.required] }),
      quantity: new FormControl('', { validators: [Validators.required, Validators.min(1)] }),
      purchasePrice: new FormControl('', { validators: [Validators.required, Validators.min(100)] }),
      investmentDate: new FormControl('', { validators: [Validators.required] }),
    })
  }

  onInvestmentSubmit() {
    if(this.investmentForm.invalid) {
      this.investmentForm.markAllAsTouched();
      return;
    }  
    this.investmentService.addInvestmentData(this.investmentForm.value);    
  }
}
