import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TokenService } from '../services/token.service';
import { JwtUtils } from '../../utils/jwtUtils';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private tokenService: TokenService,

  ) { }

  ngOnInit(): void {
    if(!this.tokenService.token || JwtUtils.isTokenExpired()){
      this.router.navigate(['/signin']);
    }
  }

}
