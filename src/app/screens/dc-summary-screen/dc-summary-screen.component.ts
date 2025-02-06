import { Component, OnInit } from '@angular/core';
import { SummaryDetails } from '../../models/SummaryDetails';
import { DcService } from '../../services/dc.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dc-summary-screen',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './dc-summary-screen.component.html',
  styleUrl: './dc-summary-screen.component.css'
})
export class DcSummaryScreenComponent implements OnInit {

  caseNumber: string = '';
  summaryDetails: SummaryDetails = {} as SummaryDetails;

  constructor(private dcService: DcService) { }

  ngOnInit(): void {
    // this.getSummaryDetails();
  }

  public getSummaryDetails() {
    this.dcService.getSummaryDetails(this.caseNumber)
      .subscribe({
        next: (data) => {
          this.summaryDetails = data;
        },
        error: (error) => {
          console.log('Error: ' + JSON.stringify(error));
        },
        complete: () => {
          console.log('Completed');
        }
      });
  }



}
