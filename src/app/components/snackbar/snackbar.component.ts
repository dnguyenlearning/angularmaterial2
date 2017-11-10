import { SnackbarChildComponent } from './snackbar-child/snackbar-child.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Dir} from '@angular/cdk/bidi';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar,private dir: Dir) { }

  ngOnInit() {

  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(message: string, action: string) {
    // this.snackBar.open(message, action, {
    //   duration: 2000,
    // });


    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.direction = this.dir.value;
    config.panelClass='test';
    config.data={message: message, action:action};
    config.duration=2000;
    this.snackBar.openFromComponent(SnackbarChildComponent,config);
  }
}
