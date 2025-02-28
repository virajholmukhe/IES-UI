import { Component, OnInit } from '@angular/core';
import { EdService } from '../../services/ed.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EligibilityDetails } from '../../models/EligibilityDetails';

@Component({
  selector: 'app-ed-determine-eligibility',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ed-determine-eligibility.component.html',
  styleUrl: './ed-determine-eligibility.component.css'
})
export class EdDetermineEligibilityComponent implements OnInit {

  constructor(
    private edService: EdService,
  ) { }

  caseNumber: string = '';
  errorMsg: string = '';
  eligibilityDetails: Array<EligibilityDetails> = new Array<EligibilityDetails>();

  ngOnInit(): void {
    this.errorMsg = '';
  }


  determineEligibility() {
    this.apiCall();
    // Code to determine eligibility
    
  }

  apiCall(){
    this.edService.determineEligibility(this.caseNumber).subscribe({
      next: (data: any) => {
        this.eligibilityDetails = data;
      },
      error: (err: any) => {
        this.errorMsg = err;
      },
      complete: () => {
        console.log('Completed');
        console.log(this.errorMsg);
      }
    });
  }

}
