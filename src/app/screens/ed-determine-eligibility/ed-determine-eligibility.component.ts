import { Component, OnInit } from '@angular/core';
import { EdService } from '../../services/ed.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  determineEligibility() {
    // Code to determine eligibility
  }

}
