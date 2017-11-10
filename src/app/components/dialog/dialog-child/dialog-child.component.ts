import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-child',
  templateUrl: './dialog-child.component.html',
  styleUrls: ['./dialog-child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogChildComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogChildComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
