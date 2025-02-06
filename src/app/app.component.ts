import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { JwtUtils } from '../utils/jwtUtils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SideBarComponent, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.tokenService.token || JwtUtils.isTokenExpired()) {
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }else{
      this.isLoggedIn = true;
    }
  }
}
