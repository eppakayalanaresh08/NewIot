import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardComponent } from '../dashboard/card/card/card.component';
import { EditComponent } from '../dashboard/edit/edit.component';
import { Edit3Component } from './edit3/edit3/edit3.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  
  opened: boolean = true;
  accountId: string[] = [];
  accountName: string[] = [];
 

  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog5(): void {
    const dialogRef = this.dialog.open(Edit3Component, {
      width: '250px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });

    
    
  }

  openDialog6(): void {
    const dialogRef = this.dialog.open(Edit3Component, {
      width: '250px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });

    
    
  }

  onClick3():void{
    this.router.navigate(['./action2']);
  }
  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }
}
