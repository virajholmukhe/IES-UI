import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UpdatePasswordRequest } from '../../models/UpdatePasswordRequest';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { JwtUtils } from '../../../utils/jwtUtils';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent implements OnInit {

  errorMsg: Array<string> = [];
  updatePasswordForm!: FormGroup;
  updatePasswordRequest: UpdatePasswordRequest = {} as UpdatePasswordRequest;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router,
    private tokenService: TokenService
  ){}

  ngOnInit(): void {
    if (this.tokenService.token && !JwtUtils.isTokenExpired()) {
      this.router.navigate(['/dashboard'])
    } else {
      localStorage.clear();
    }
    this.updatePasswordForm = this.fb.group({
      email:['', [Validators.required]],
      tempPassword:['', [Validators.required]],
      password:['', [Validators.required]],
      confirmPassword:['', [Validators.required]]
    });
  }

  update(){
    this.errorMsg = [];
    this.updatePasswordRequest.email = this.updatePasswordForm.get('email')?.value;
    this.updatePasswordRequest.tempPassword = this.updatePasswordForm.get('tempPassword')?.value;
    this.updatePasswordRequest.password = this.updatePasswordForm.get('password')?.value;
    this.updatePasswordRequest.confirmPassword = this.updatePasswordForm.get('confirmPassword')?.value;

    this.authService.updatePassword(this.updatePasswordRequest).subscribe({
      next: ()=>{
        
      },
      error: (err)=>{
        this.errorMsg.push(err);
      },
      complete: ()=>{
        this.errorMsg = [];
        this.router.navigate(['/login']);
      }
    });
  }



}
