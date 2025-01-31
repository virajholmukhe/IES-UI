import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router, private tokenService: TokenService){}

  logout(){
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

}
