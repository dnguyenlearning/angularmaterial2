import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogUserComponent implements OnInit {
  user;
  constructor(
    public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.user=this.data.row;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
