import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ReportingComponent } from './reporting/reporting.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { FilterReportComponent } from './filter-report/filter-report.component';

export const routes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'dashboard', component: DashboardPageComponent },
    { path: 'reporting', component: ReportingComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'add-new-record', component: AddNewRecordComponent },
];
