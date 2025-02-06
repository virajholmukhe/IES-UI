import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { JwtUtils } from '../../../utils/jwtUtils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMsg: Array<string> = [];

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private formBuilder: FormBuilder,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    
    if(this.tokenService.token && !JwtUtils.isTokenExpired()){
      this.router.navigate(['/dashboard'])
    }else{
      localStorage.clear();
    }
    console.log('Login component DoCheck');

    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
  login() {
    this.errorMsg = [];
    this.authRequest.email = this.loginForm.get('email')?.value;
    this.authRequest.password = this.loginForm.get('password')?.value;
    console.log(this.authRequest);

    this.authService.authenticate(this.authRequest).subscribe({
      next: (result)=>{
        this.errorMsg = [];
        this.tokenService.token = result.token as string;
        
      },
      error: (err)=>{
        console.log(err);
        this.errorMsg.push(err);
      },
      complete: ()=>{
        this.router.navigate(['/dashboard']);
        window.location.reload();
      }
    });
  }

}
