import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.css'],
})
export class BugReportComponent implements OnInit {
  selectedValue: string = '';
  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  selectChangeHandler(event: any) {
    this.selectedValue = event.target.value;
  }

  sendBugData(username: any, details: any) {
    let obj = {
      usertype: parseInt(this.selectedValue),
      message: details,
      name: 'John',
      surname: 'Doe',
      username: username,
      password: 'xyzXYZ123321',
      tstamp: '2021-12-31T10:11:12.313Z',
      actiontaken: 'did something',
      status: '0',
    };
    console.log('obj is', obj);
    this.http.addReview(obj, 'bugreport');
  }
}
