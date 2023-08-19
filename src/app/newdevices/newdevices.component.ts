import { Component,Inject } from '@angular/core';

// import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { CardComponent } from './card/card/card.component';
import { Router } from '@angular/router';
// import { EditComponent } from './edit/edit.component';
import { HttpClient } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';





@Component({
  selector: 'app-newdevices',
  templateUrl: './newdevices.component.html',
  styleUrls: ['./newdevices.component.css']
  // standalone: true,
  // imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule]
})
export class NewdevicesComponent {

  events: string[] = [];
  opened: boolean = true;
  shouldRun: boolean = true;
  accountId: string[] = [];
  accountName: string[] = [];
  admin:string[] = [];
  selected:string=""
  devices:string[]=[
    "Hyderbad Account",
    "Engineer-Bala [Bariflolabs]",
    "Eluru Devices",
    "Mohit",
    "Bala Test Account",
    "Bhubanshwar",
    "CIBA",
    "Puri Devices",
    "Puri Devices"

  ]
  // constructor(public dialog: MatDialog, private router: Router,private http:HttpClient) {
  //   // this.loginform-this.formBuilder.group
  // }



  // ():void{
  //   this.http.post("http://127.0.0.1:8000/admin",DialogData)
  // }

  // openDialog(): void {
    
  //   const dialogRef = this.dialog.open(CardComponent, {
  //     width: '250px',
      
  //   });
    // dialogRef.afterOpened().subscribe(()=>{
    //   this.http.post("http://192.168.0.113:8000/admin",this.).subscribe(
    //     (res)=>{
    //             this.
    //     }
    //   )
    // })

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed')
      
    // });
   
  
  
  



  // openDialog1(): void {
  //   const dialogRef = this.dialog.open(EditComponent, {
  //     width: '250px',
  //     data: { accountId: this.accountId, accountName: this.accountName },
      
  //   });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed')
    //   this.accountId = result;
    //   this.accountName = result;
      
    // });

    
    
  

  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }

  // onClick():void{
  //   this.router.navigate(['./action']);
  // }

  // colorControl = new FormControl('primary' as ThemePalette);


}
