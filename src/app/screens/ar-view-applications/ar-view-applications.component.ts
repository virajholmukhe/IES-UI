import { Component, OnInit } from '@angular/core';
import { CitizenApplication } from '../../models/CitizenApplication';
import { ArService } from '../../services/ar.service';
import { JwtUtils } from '../../../utils/jwtUtils';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ar-view-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ar-view-applications.component.html',
  styleUrl: './ar-view-applications.component.css'
})
export class ArViewApplicationsComponent implements OnInit {

  citizenApplicationList: Array<CitizenApplication> = [];
  errorMsg: string = '';

  constructor(
    private citizenApplicationService: ArService,
    private router: Router
    
  ) { }

  ngOnInit() {
    this.errorMsg = '';
    this.citizenApplicationService.getApplications().subscribe({
      next: (response) => {
        this.citizenApplicationList = response;
      },
      error: (error) => {
        this.errorMsg = error;
      },
      complete: () => {
        console.log('Completed');
      }
    })
  }

  routeToDataCollection(caseNumber: string) {
    this.router.navigate(['/plan-selection', { caseNumber: caseNumber }]);
  }

}
