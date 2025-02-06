import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DcService } from '../../services/dc.service';
import { Router } from '@angular/router';
import { BankDetails } from '../../models/BankDetails';

@Component({
  selector: 'app-dc-bank-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dc-bank-details.component.html',
  styleUrl: './dc-bank-details.component.css'
})
export class DcBankDetailsComponent implements OnInit{

  caseNumber: string = '';
  bankDetailsForm: FormGroup = {} as FormGroup;
  bankDetails: BankDetails = {} as BankDetails;
  errorMsg: string = '';

  constructor(
    private dcService: DcService,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {

    this.bankDetailsForm = this.fb.group({
      bankName: ['', [Validators.required]],
      branchName: ['', [Validators.required]],
      ifscCode: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
    });
  }

  saveBankDetails(): void {
    console.log(this.bankDetailsForm.value);
    this.bankDetails.caseNumber = this.caseNumber;
    this.bankDetails.bankName = this.bankDetailsForm.get('bankName')?.value;
    this.bankDetails.branchName = this.bankDetailsForm.get('branchName')?.value;
    this.bankDetails.ifscCode = this.bankDetailsForm.get('ifscCode')?.value;
    this.bankDetails.accountNumber = this.bankDetailsForm.get('accountNumber')?.value;

    this.dcService.saveBankDetails(this.bankDetails).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/summary-screen']);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    })
  }


}
