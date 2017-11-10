import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA , MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-snackbar-child',
  templateUrl: './snackbar-child.component.html',
  styleUrls: ['./snackbar-child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SnackbarChildComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private matSnackBarRef: MatSnackBarRef<SnackbarChildComponent>
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  close(): void {
    this.matSnackBarRef.closeWithAction();
  }

}
