import { Component, OnInit } from '@angular/core';
import { CitizenApplication } from '../../models/CitizenApplication';
import { ArService } from '../../services/ar.service';
import { JwtUtils } from '../../../utils/jwtUtils';
import { CommonModule } from '@angular/common';

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
    
  ) { }

  ngOnInit() {
    this.errorMsg = '';
    this.citizenApplicationService.getApplications(JwtUtils.getUserId(), JwtUtils.getUserType()).subscribe({
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

}
