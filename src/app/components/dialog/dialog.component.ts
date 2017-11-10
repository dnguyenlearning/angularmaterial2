import { DialogChildComponent } from './dialog-child/dialog-child.component';

import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogChildComponent, {
      width: '200px',
      height:'250px',
      position:{top:'25px',left:'25px'},
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('after Close');
    });

    dialogRef.backdropClick().subscribe(result=>{
      console.log('backdrop Click');
      this.name='';
    })

    dialogRef.beforeClose().subscribe(result=>{
      console.log('before Close')
    })
    
    
  }

}
