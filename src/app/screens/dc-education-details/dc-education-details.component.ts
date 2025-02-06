import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DcService } from '../../services/dc.service';
import { EducationDetails } from '../../models/EducationDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-education-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dc-education-details.component.html',
  styleUrl: './dc-education-details.component.css'
})
export class DcEducationDetailsComponent implements OnInit {

  caseNumber: string = '';
  educationDetails: EducationDetails = {} as EducationDetails;
  educationDetailsForm!: FormGroup;

  constructor(
    private dcService: DcService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.educationDetailsForm = this.fb.group({
      highestQualification: ['', [Validators.required]],
      qualificationYear: ['', [Validators.required]],
      qualificationUniversity: ['', [Validators.required]]
    }); 

  }

  public saveEducationDetails(){
    this.educationDetails.caseNumber = this.caseNumber;
    this.educationDetails.highestQualification = this.educationDetailsForm.get('highestQualification')?.value;
    this.educationDetails.qualificationYear = this.educationDetailsForm.get('qualificationYear')?.value;
    this.educationDetails.qualificationUniversity = this.educationDetailsForm.get('qualificationUniversity')?.value;

    this.dcService.saveEducationDetails(this.educationDetails).subscribe({
      next: data => {
        console.log('Data Saved: ' + JSON.stringify(data));
        this.router.navigate(['/family-details']);
      },
      error: error => {
        console.log('Error: ' + error);
      },complete: () => {
        console.log('Completed');
      }
    })
  }

}
