import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import SnackBar from '../utils/snakbar';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.css'],
})
export class BugReportComponent implements OnInit {
  selectedValue: string = '';
  constructor(private http: HttpService, private _snackBar: SnackBar) {}

  ngOnInit(): void {}

  selectChangeHandler(event: any) {
    this.selectedValue = event.target.value;
  }

  sendBugData(username: any, details: any) {
    if (!username) {
      this._snackBar.showSnackBar('Please enter your username', '');
    } else if (!details) {
      this._snackBar.showSnackBar('Please enter your details', '');
    } else {
      let obj = {
        actiontaken: '',
        email: '',
        message: details,
        name: username,
        organization: '',
        password: '',
        requestType: '0',
        school: '',
        status: 0,
        surname: '',
        tstamp: new Date().toISOString(),
        usertype: parseInt(this.selectedValue),
        username: username,
      };
      console.log('obj is', obj);
      this.http
        .sendRequest(obj, 'bugreport')
        .then((data) => {
          this._snackBar.showSnackBar('Data Submitted Successfully', '');
        })
        .catch((err) => {
          this._snackBar.showSnackBar('Error in Request:' + err.message, '');
        });
    }
  }
}
