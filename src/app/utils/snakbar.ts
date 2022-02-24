import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class SnackBar {
  constructor(
    protected _snack: MatSnackBar
  ) { }

  showSnackBar(err: any, emoji: any) {
    this._snack.open(err, emoji, {
      horizontalPosition: "right",
      verticalPosition: "top",
      duration: 5 * 1000
    });
  }
}
