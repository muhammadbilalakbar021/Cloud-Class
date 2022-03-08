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
  ip: any;
  constructor(private http: HttpService, private _snackBar: SnackBar) {}

  ngOnInit(): void {
    this.http.fetchIp().then((ip) => {
      this.ip = ip;
    });
  }
  changeState() {
    return (this.isHided = !this.isHided);
  }
  sendDownloadData(name: any, email: any, surname: any) {
    if (!name) {
      this._snackBar.showSnackBar('Please enter your name', '');
    } else if (!surname) {
      this._snackBar.showSnackBar('Please enter your surname', '');
    } else if (!email) {
      this._snackBar.showSnackBar('Please enter your email', '');
    } else {
      let obj = {
        name: name,
        surname: surname,
        ipaddress: this.ip,
        email: email,
        tstamp: new Date().toISOString(),
      };
      // console.log('obj is', obj);
      this.http.sendRequest(obj, 'download');
    }
  }
}
