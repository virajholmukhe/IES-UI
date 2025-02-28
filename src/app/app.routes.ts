import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { UpdatePasswordComponent } from './user/update-password/update-password.component';
import { AuthGuard } from './services/auth.guard';
import { ArCreateApplicationComponent } from './screens/ar-create-application/ar-create-application.component';
import { ArViewApplicationsComponent } from './screens/ar-view-applications/ar-view-applications.component';
import { DcPlanSelectionComponent } from './screens/dc-plan-selection/dc-plan-selection.component';
import { DcIncomeDetailsComponent } from './screens/dc-income-details/dc-income-details.component';
import { DcEducationDetailsComponent } from './screens/dc-education-details/dc-education-details.component';
import { DcFamilyDetailsComponent } from './screens/dc-family-details/dc-family-details.component';
import { DcBankDetailsComponent } from './screens/dc-bank-details/dc-bank-details.component';
import { DcSummaryScreenComponent } from './screens/dc-summary-screen/dc-summary-screen.component';
import { EdDetermineEligibilityComponent } from './screens/ed-determine-eligibility/ed-determine-eligibility.component';
import { CoCorrespondenceComponent } from './screens/co-correspondence/co-correspondence.component';
import { CoPendingNoticesComponent } from './screens/co-pending-notices/co-pending-notices.component';
import { CoHistoryNoticesComponent } from './screens/co-history-notices/co-history-notices.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'update-password', component: UpdatePasswordComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

    { path: 'create-application', component: ArCreateApplicationComponent, canActivate: [AuthGuard] },
    { path: 'view-applications', component: ArViewApplicationsComponent, canActivate: [AuthGuard] },

    { path: 'plan-selection', component: DcPlanSelectionComponent, canActivate: [AuthGuard], 
        data: { caseNumber: '' } },
    { path: 'income-details', component: DcIncomeDetailsComponent, canActivate: [AuthGuard] },
    {path: 'education-details', component: DcEducationDetailsComponent, canActivate: [AuthGuard]},
    { path: 'family-details', component: DcFamilyDetailsComponent, canActivate: [AuthGuard] },
    { path: 'bank-details', component: DcBankDetailsComponent, canActivate: [AuthGuard] },
    { path: 'summary-screen', component: DcSummaryScreenComponent, canActivate: [AuthGuard] },

    { path: 'determine-eligibility', component: EdDetermineEligibilityComponent, canActivate: [AuthGuard] },

    { path: 'correspondence', component: CoCorrespondenceComponent, canActivate: [AuthGuard] },
    { path: 'pending-notices', component: CoPendingNoticesComponent, canActivate: [AuthGuard] },
    { path: 'history-notices', component: CoHistoryNoticesComponent, canActivate: [AuthGuard] },
    
    
    
];
