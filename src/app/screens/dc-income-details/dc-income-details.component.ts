import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DcService } from '../../services/dc.service';
import { IncomeDetails } from '../../models/IncomeDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-income-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './dc-income-details.component.html',
  styleUrl: './dc-income-details.component.css'
})
export class DcIncomeDetailsComponent implements OnInit {

  caseNumber: string = '';
  incomeDetailsForm!: FormGroup;
  incomeDetails: IncomeDetails = {} as IncomeDetails;

  constructor(
    private fb: FormBuilder,
    private dcService: DcService,
    private router: Router

  ) { }

  ngOnInit() {
    this.incomeDetailsForm = this.fb.group({
      salaryIncome: ['', [Validators.required]],
      businessIncome: ['', [Validators.required]],
      rentIncome: ['', [Validators.required]],
      propertyIncome: ['', [Validators.required]],
    });
  }

  public saveIncomeDetails(){
    
    this.incomeDetails.caseNumber = this.caseNumber;
    this.incomeDetails.salaryIncome = this.incomeDetailsForm.get('salaryIncome')?.value;
    this.incomeDetails.businessIncome = this.incomeDetailsForm.get('businessIncome')?.value;
    this.incomeDetails.rentIncome = this.incomeDetailsForm.get('rentIncome')?.value;
    this.incomeDetails.propertyIncome = this.incomeDetailsForm.get('propertyIncome')?.value;

    this.dcService.saveIncomeDetails(this.incomeDetails).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(['/education-details']);
      },
      error: error => {
        console.error('There was an error!', error);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }

}
