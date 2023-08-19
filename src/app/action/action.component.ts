import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardComponent } from '../dashboard/card/card/card.component';
import { EditComponent } from '../dashboard/edit/edit.component';



@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  opened: boolean = false;
  accountId: string[] = [];
  accountName: string[] = [];
  deletedeviceshow:boolean=false;

  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog7(): void {
    const dialogRef = this.dialog.open(CardComponent, {
      width: '250px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });

    
    
  }

  openDialog8(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });

    
    
  }
  
  


  openDialog10(): void {
    const dialogRef = this.dialog.open(CardComponent, {
      width: '250px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });

    
  }



  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }


  onClick7(): void {
    this.router.navigate(['./edit5']);
  }

  onClick8(): void {
    this.router.navigate(['./stat']);
  }
  
  deleteFormDevice(){
    this.deletedeviceshow=true
  }

  deleteDeviceNo(){
    this.deletedeviceshow=false

  }

  confirmDeletedevice(){
    //
  }




}
