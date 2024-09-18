import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ReportingComponent } from './reporting/reporting.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    // { path: '', component: SignInComponent },
    // { path: '', component: DashboardPageComponent },
    // { path: '', component: ReportingComponent },
    { path: '', component: AddUserComponent },
];
