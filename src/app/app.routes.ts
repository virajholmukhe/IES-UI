import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { UpdatePasswordComponent } from './user/update-password/update-password.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'update-password', component: UpdatePasswordComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    
    
];
