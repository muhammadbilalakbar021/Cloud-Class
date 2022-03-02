import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';
import SnackBar from '../utils/snakbar';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
})
export class DownloadsComponent implements OnInit {
  isHided: boolean = true;
  constructor(private http: HttpService, private _snackBar: SnackBar) {}

  ngOnInit(): void {}
  changeState() {
    return (this.isHided = !this.isHided);
  }
  sendDownloadData(name: any, email: any, surname: any) {
    if (!name) {
      this._snackBar.showSnackBar('Please enter your name', '');
    } else if (!surname) {
      this._snackBar.showSnackBar('Please enter your sirname', '');
    } else if (!email) {
      this._snackBar.showSnackBar('Please enter your email', '');
    } else {
      let obj = {
        name: name,
        surname: surname,
        ipaddress: '123.345.678.765',
        email: email,
        tstamp: '2021-12-31T10:11:12.313Z',
      };
      console.log('obj is', obj);
      this.http.addReview(obj, 'download');
    }
  }
}
