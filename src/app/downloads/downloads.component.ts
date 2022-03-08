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
  selected: any = "";
  ip: any;
  constructor(private http: HttpService, private _snackBar: SnackBar) { }

  ngOnInit(): void {
    this.http.fetchIp().then((ip) => {
      this.ip = ip;
    });
  }
  changeState(s: string) {
    if (this.selected == s) {
      this.isHided = !this.isHided;
    } else {
      this.selected = s;
      this.isHided = false;
    }
  }

  downloadFile(data: string) {
    const url = `../../assets/${data}.zip`;
    window.open(url);
  }

  sendDownloadData(name: any, email: any, surname: any) {
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
    } else {
      let obj = {
        name: name,
        surname: surname,
        ipaddress: this.ip,
        email: email,
        requesttype: 0,
        tstamp: new Date().toISOString(),
        usertype: 0
      };
      // console.log('obj is', obj);
      this.http.sendRequest(obj, 'download').then(
        () => {
          this.downloadFile(this.selected);
        }
      );
    }
  }
}
