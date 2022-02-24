import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { BugReportComponent } from './bug-report/bug-report.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { CloudClassComponent } from './cloud-class/cloud-class.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'bug-report', component: BugReportComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'downloads', component: DownloadsComponent},
  {path: 'cloud-class', component: CloudClassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
