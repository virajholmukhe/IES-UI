import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlanDetails } from '../../models/PlanDetails';
import { DcService } from '../../services/dc.service';
import { FormsModule } from '@angular/forms';
import { ArService } from '../../services/ar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-dc-plan-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dc-plan-selection.component.html',
  styleUrl: './dc-plan-selection.component.css'
})
export class DcPlanSelectionComponent implements OnInit {

  planDetailList: Array<PlanDetails> = [];
  caseNumber: string = '';
  planId: string = 'Select Plan';
  planName: string = '';
  errorMsg: string = '';

  constructor(
    private dcService: DcService,
    private arService: ArService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getPlanList();
    this.errorMsg = '';
    this.caseNumber = this.activatedRoute.snapshot.paramMap.get('caseNumber') || '';
  }

  updatePlan(){
    console.log('Case Number: ', this.caseNumber);
    console.log('Plan ID: ', this.planId);

    if(this.planDetailList.length > 0){
      this.planName = this.planDetailList.find(plan => plan.id === this.planId)?.name || '';
      
      this.arService.updatePlan(this.caseNumber, this.planId, this.planName).subscribe({
        next: data => {
          console.log('Data: ', data);
          this.router.navigate(['/income-details']);
        },
        error: err => {
          this.errorMsg = err;
        },
        complete: () => {
          console.log('Completed');
        }
      });
    }

  }

  public getPlanList(): void {
    this.dcService.getPlanList().subscribe({
      next: data => {
        this.planDetailList = data;
      },
      error: err => {
        console.log('Error: ', err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }



}
