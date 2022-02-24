import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { BugReportComponent } from './bug-report/bug-report.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { CloudClassComponent } from './cloud-class/cloud-class.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreateAccountComponent,
    BugReportComponent,
    ContactUsComponent,
    DownloadsComponent,
    CloudClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
