import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContPopupComponent } from '../modals/cont-popup/cont-popup.component';
import SnackBar from '../utils/snakbar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  userType: string = '';
  requestType: string = '';

  constructor(
    private http: HttpService,
    public dialog: MatDialog,
    private _snackBar: SnackBar
  ) { }

  ngOnInit(): void { }
  selectUserType(event: any) {
    if (event.target.value == 'Select') {
      this.userType = "";
    } else {
      this.userType = event.target.value;
    }
  }

  selectRequestType(event: any) {
    if (event.target.value == 'Select') {
      this.requestType = "";
    } else {
      this.requestType = event.target.value;
    }
  }

  sendContactData(username: any, name: any, surname: any, details: any, email: any) {
    if (!name) {
      this._snackBar.showSnackBar('Please enter your username', '');
    } else if (!username) {
      this._snackBar.showSnackBar('Please enter your name', '');
    } else if (!surname) {
      this._snackBar.showSnackBar('Please enter your surname', '');
    } else if (!email
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      this._snackBar.showSnackBar('Please enter your email', '');
    } else if (!this.userType) {
      this._snackBar.showSnackBar('Please select your user type', '');
    } else if (!this.requestType) {
      this._snackBar.showSnackBar('Please select your request type', '');
    } else {
      let obj = {
        usertype: this.userType,
        requestType: this.requestType,
        message: details,
        email: email,
        name: name,
        surname: surname,
        username: username,
        password: '',
        tstamp: new Date().toISOString(),
        actiontaken: '',
        status: 0,
      };
      console.log('obj is', obj);
      this.http
        .sendRequest(obj, 'contact')
        .then((data) => {
          this._snackBar.showSnackBar('Data Submitted Successfully', '');
        })
        .catch((err) => {
          this._snackBar.showSnackBar('Error in Request', '');
        });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContPopupComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
