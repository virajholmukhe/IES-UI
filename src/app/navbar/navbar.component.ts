import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../services/token.service';
import { CommonModule } from '@angular/common';
import { JwtUtils } from '../../utils/jwtUtils';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  role: string = '';

  constructor(private router: Router, private tokenService: TokenService){}
  ngOnInit(): void {
    if(this.tokenService.token){
      this.isLoggedIn = true;
      this.role = JwtUtils.getUserType();
    }
  }

  logout(){
    this.tokenService.clearToken();
    window.location.reload();
    this.router.navigate(['/login']);
  }

}
