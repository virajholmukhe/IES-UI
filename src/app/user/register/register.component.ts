import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../models/User';
import { TokenService } from '../../services/token.service';
import { JwtUtils } from '../../../utils/jwtUtils';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  registrationRequest: User = {} as User;
  registerForm!: FormGroup;
  errorMsg: Array<string> = [];

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private tokenService: TokenService, 
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    
    if(this.tokenService.token && !JwtUtils.isTokenExpired()){
      this.router.navigate(['/dashboard'])
    }else{
      localStorage.clear();
    }

    this.registerForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required]],
      role: ['USER', [Validators.required]],
      gender:['', [Validators.required]],
      phone:['', [Validators.required]],
      dob:['', [Validators.required]],
      aadharNo:['', [Validators.required]],
    });
  }

  register(){
    this.registrationRequest.name = this.registerForm.get('name')?.value;
    this.registrationRequest.email = this.registerForm.get('email')?.value;
    this.registrationRequest.password = this.registerForm.get('password')?.value;
    this.registrationRequest.role = this.registerForm.get('role')?.value;
    this.registrationRequest.gender = this.registerForm.get('gender')?.value;
    this.registrationRequest.phone = this.registerForm.get('phone')?.value;
    this.registrationRequest.dob = this.registerForm.get('dob')?.value;
    this.registrationRequest.aadharNo = this.registerForm.get('aadharNo')?.value;

    this.authService.register(this.registrationRequest).subscribe({
      next: ()=>{
        this.router.navigate(['/login'])
      },
      error: (err)=>{
        this.errorMsg.push(err);
      },
      complete: ()=>{
        this.errorMsg = [];
        this.router.navigate(['/update-password']);
      }
    });
    this.router.navigate(['/register']);
  }

}
