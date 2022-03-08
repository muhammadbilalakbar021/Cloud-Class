import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SnackBar from '../utils/snakbar';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(protected _snack: SnackBar, private http: HttpClient) {}

  addReview(object: any, route: string) {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(
          `https://www.cloud-class.com/website/rest/dbserver/${route}`,
          object,
          { responseType: 'text' }
        )
        .toPromise()
        .then((data: any) => {
          // Debugger
          console.log(data);
          // Check Length of Data
          if (data == null) {
            // Error PopUp
            console.log('Hello');
            this._snack.showSnackBar('Soory, You dont have any Medicine', '');
          }
          // Hurrah Baby
          resolve(data);
        })
        .catch((err) => {
          // Debugger
          console.log(err);
          // Error PopUp
          this._snack.showSnackBar(err.message, '');

          // Rejection Baby
          reject(err);
        });
    });
  }



}
