import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  sendData(name: any, surname: any, email: any, school: any, application: any) {
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
    console.log("obj is", obj)
    this.http.addReview(obj, 'newaccount');
  }

  actionMethod(link:any){
    link.parentElement.classList.remove('isDisabled');
  }
}
