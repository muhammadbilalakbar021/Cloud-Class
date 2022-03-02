import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';
import SnackBar from '../utils/snakbar';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  constructor(private http: HttpService, private _snackBar: SnackBar) {}

  ngOnInit(): void {}

  sendData(name: any, surname: any, email: any, school: any, application: any) {
    if (!name) {
      this._snackBar.showSnackBar('Please enter your name', '');
    } else if (!surname) {
      this._snackBar.showSnackBar('Please enter your sirname', '');
    } else if (!email || !email.includes('@')) {
      this._snackBar.showSnackBar('Please enter your email', '');
    } else if (!school) {
      this._snackBar.showSnackBar('Please enter your school', '');
    } else if (!application) {
      this._snackBar.showSnackBar('Please enter your application', '');
    } else {
      let obj = {
        email: email,
        school: school,
        usertype: 0,
        message: application,
        name: name,
        surname: surname,
        username: '',
        password: '',
        tstamp: '2021-12-31T10:11:12.313Z',
        actiontaken: '',
        status: '0',
      };
      console.log('obj is', obj);
      this.http
        .addReview(obj, 'newaccount')
        .then((data) => {
          this._snackBar.showSnackBar('Data Submitted Successfully', '');
        })
        .catch((err) => {
          this._snackBar.showSnackBar('Error in Request', '');
        });
    }
  }

  actionMethod(link: any) {
    link.parentElement.classList.remove('isDisabled');
  }
}
