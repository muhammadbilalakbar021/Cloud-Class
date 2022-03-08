import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SnackBar from '../utils/snakbar';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(protected _snack: SnackBar, private http: HttpClient) { }

  sendRequest(object: any, route: string) {
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
            this._snack.showSnackBar('Server gave an unexpected response.', '');
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

  fetchIp() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(
        'http://www.geoplugin.net/json.gp',
        {
          responseType: 'json'
        })
        .toPromise()
        .then((data: any) => {
          if (data == null) {
            resolve(null);
          } else {
            resolve(data.geoplugin_request);
          }
        })
        .catch((err) => {
          this._snack.showSnackBar(err.message, '');
          reject(err);
        })
    });
  }



}
