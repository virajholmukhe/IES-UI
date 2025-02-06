import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FamilyDetails } from '../../models/FamilyDetails';
import { KidDetails } from '../../models/KidDetails';
import { DcService } from '../../services/dc.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-dc-family-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './dc-family-details.component.html',
  styleUrl: './dc-family-details.component.css'
})
export class DcFamilyDetailsComponent implements OnInit{

  caseNumber: string = '';
  familyDetailsForm: UntypedFormGroup = new UntypedFormGroup({});
  familyDetails: FamilyDetails = {} as FamilyDetails;
  // kidsArray: UntypedFormArray = new UntypedFormArray([]);

  constructor(
    private fb: FormBuilder,
    private dcService: DcService,
    private router: Router
    
  ){
    this.familyDetailsForm = this.fb.group({
      kids: this.fb.array([this.fb.group({
        kidName: ['', Validators.required],
        kidDob: ['', [Validators.required]],
        kidGender: ['', Validators.required],
        kidAadhar: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]]
      })])
    });
  }

  ngOnInit(): void {
    // this.kidsArray.push(this.createKidForm());
    
  }

  get kids(): FormArray {
    return this.familyDetailsForm.get('kids') as FormArray;
  }

  addKid(): void {
    const kidForm = this.fb.group({
      kidName: ['', Validators.required],
      kidDob: ['', [Validators.required]],
      kidGender: ['', Validators.required],
      kidAadhar: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]]
    });
    this.kids.push(kidForm);
  }

  removeKid(index: number): void {
    this.kids.removeAt(index);
  }

  public saveFamilyDetails(): void {
    console.log(this.familyDetailsForm.value);
    var kidList: Array<KidDetails> = [];
    for (let i = 0; i < this.familyDetailsForm.value.kids.length; i++) {
      var kid: KidDetails = {} as KidDetails;
      kid.kidName = this.familyDetailsForm.value.kids[i].kidName;
      kid.kidDob = this.familyDetailsForm.value.kids[i].kidDob;
      kid.kidGender = this.familyDetailsForm.value.kids[i].kidGender;
      kid.kidAadhar = this.familyDetailsForm.value.kids[i].kidAadhar;
      kidList.push(kid);
    }
    this.familyDetails.kids = kidList;
    this.familyDetails.caseNumber = this.caseNumber;
    console.log(this.familyDetails);
    this.dcService.saveFamilyDetails(this.familyDetails).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/bank-details']);  
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

}
