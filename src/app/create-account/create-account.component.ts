import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';
import SnackBar from '../utils/snakbar';
import { ContPopupComponent } from '../modals/cont-popup/cont-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  public isSendForm: boolean = false;

  constructor(
    private http: HttpService,
    private _snackBar: SnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  sendData(name: any, surname: any, email: any, school: any, application: any) {
    this.openDialog(name, surname, email, school, application);
  }

  actionMethod(link: any) {
    link.parentElement.classList.remove('isDisabled');
  }

  openDialog(
    name: any,
    surname: any,
    email: any,
    school: any,
    application: any
  ) {
    const dialogRef = this.dialog.open(ContPopupComponent);

    return dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        this.isSendForm = true;
        if (!name) {
          this._snackBar.showSnackBar('Please enter your name', '');
        } else if (!surname) {
          this._snackBar.showSnackBar('Please enter your surname', '');
        } else if (
          !email
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ) {
          this._snackBar.showSnackBar('Please enter your email', '');
        } else if (!school) {
          this._snackBar.showSnackBar('Please enter your school', '');
        } else if (!application) {
          this._snackBar.showSnackBar('Please enter your application', '');
        } else {
          let obj = {
            actiontaken: "",
            email: email,
            message: application,
            name: name,
            organisation: "",
            password: '',
            requesttype: 0,
            school: school,
            status: 0,
            surname: surname,
            tstamp: new Date().toISOString(),
            username: '',
            usertype: 0,
          };
          console.log('obj is', obj);
          this.http
            .sendRequest(obj, 'newaccount')
            .then((data) => {
              this._snackBar.showSnackBar('Data Submitted Successfully', '');
            })
            .catch((err) => {
              this._snackBar.showSnackBar('Error in Request', '');
            });
        }
      }
    });
  }
}
