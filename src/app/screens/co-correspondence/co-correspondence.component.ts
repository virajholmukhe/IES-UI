import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-co-correspondence',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './co-correspondence.component.html',
  styleUrl: './co-correspondence.component.css'
})
export class CoCorrespondenceComponent implements OnInit{
  
  caseNumber: string = '';
  notices: Array<any> = [];

  constructor(
    private router: Router,

  ) { }
  
  ngOnInit(): void {

  }


}
