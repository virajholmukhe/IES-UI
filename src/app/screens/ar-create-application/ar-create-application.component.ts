import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CitizenApplication } from '../../models/CitizenApplication';
import { ArService } from '../../services/ar.service';
import { JwtUtils } from '../../../utils/jwtUtils';

@Component({
  selector: 'app-ar-create-application',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ar-create-application.component.html',
  styleUrl: './ar-create-application.component.css'
})
export class ArCreateApplicationComponent implements OnInit {

  applicationForm!: FormGroup;
  errorMsgs = Array<string>();
  citizenApplication: CitizenApplication = {} as CitizenApplication;

  constructor(
    private formBuilder: FormBuilder,
    private arService: ArService
  ){}
  ngOnInit(): void {
    this.applicationForm = this.formBuilder.group({
      citizenName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      citizenEmail: ['', [Validators.required, Validators.email]],
      citizenPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      citizenGender: ['', [Validators.required]],
      citizenDob: ['', [Validators.required]],
      citizenAadhar: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]]
    });
  }

  createApplication() {
    this.citizenApplication.citizenName = this.applicationForm.get('citizenName')?.value;
    this.citizenApplication.citizenEmail = this.applicationForm.get('citizenEmail')?.value;
    this.citizenApplication.citizenPhone = this.applicationForm.get('citizenPhone')?.value;
    this.citizenApplication.citizenGender = this.applicationForm.get('citizenGender')?.value;
    this.citizenApplication.citizenDob = this.applicationForm.get('citizenDob')?.value;
    this.citizenApplication.citizenAadhar = this.applicationForm.get('citizenAadhar')?.value;
    this.citizenApplication.createdBy = JwtUtils.getUserId();
    console.log(this.citizenApplication);

    // Call the service to create application
    this.arService.createApplication(this.citizenApplication).subscribe({
      next: (data) => {
        console.log('Data Fetched: ' + JSON.stringify(data));
        console.log('Application created successfully');
      },
      error: (err) => {
        console.log('Error: ' + err);
        this.errorMsgs.push(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }



}
