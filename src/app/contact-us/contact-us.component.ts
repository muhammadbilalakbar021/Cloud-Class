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
  selectedValue: string = '';
  checkedValue: string = '';

  constructor(
    private http: HttpService,
    public dialog: MatDialog,
    private _snackBar: SnackBar
  ) {}

  ngOnInit(): void {}
  selectChangeHandler(event: any) {
    this.selectedValue = event.target.value;
  }

  selectEventHandler(event: any) {
    this.checkedValue = event.target.value;
  }

  sendContactData(username: any, name: any, surname: any, details: any) {
    if (!name) {
      this._snackBar.showSnackBar('Please enter your username', '');
    } else if (!username) {
      this._snackBar.showSnackBar('Please enter your name', '');
    } else if (!surname) {
      this._snackBar.showSnackBar('Please enter your surname', '');
    } else if (!details) {
      this._snackBar.showSnackBar('Please enter your details', '');
    } else {
      let obj = {
        usertype: this.selectedValue,
        message: details,
        name: name,
        surname: surname,
        username: username,
        password: 'xyzXYZ123321',
        tstamp: '2021-12-31T10:11:12.313Z',
        actiontaken: 'did something',
        status: '0',
      };
      console.log('obj is', obj);
      this.http
        .addReview(obj, 'contact')
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
