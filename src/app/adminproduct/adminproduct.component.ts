import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent {
  title = 'Electronic';
  constructor (private dialog : MatDialog){

  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    


      
    });
  }
}


