import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardComponent } from './card/card/card.component';
// import { Router } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HttpClient } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  events: string[] = [];
  opened: boolean = true;
  shouldRun: boolean = true;
  accountId: string[] = [];
  accountName: string[] = [];
  admin:string[] = [];
  deleteshowForm = false;

 

  constructor(public dialog: MatDialog,private Auther:AuthenticationService ,private router: Router,private http:HttpClient) {
    // this.loginform-this.formBuilder.group
  }

  onLogOut(){
    this.router.navigate(['login'])
  }



  // ():void{
  //   this.http.post("http://127.0.0.1:8000/admin",DialogData)
  // }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(CardComponent, {
      width: '250px',
      
    });
    // dialogRef.afterOpened().subscribe(()=>{
    //   this.http.post("http://192.168.0.113:8000/admin",this.).subscribe(
    //     (res)=>{
    //             this.
    //     }
    //   )
    // })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      
    });
   
  }
  
  



  openDialog1(): void {
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

  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }

  onClick():void{
    this.router.navigate(['./action']);
  }


  deleteOpenForm(){
   this.deleteshowForm=true
  }

  confirmDeleteAccount(){

  }

  deleteNo(){
    this.deleteshowForm=false

  }

  getMobiles(){

  }

  // confirmDeleteAccount(accountId:any) {
  //   this.Auther.confirmDeleteAccount(accountId).subscribe(

  //     (rs: any) => {
  //       this.getMobiles();
  //     },
  //     (error: any) => {
  //       // Handle error here
  //     }
  //   ///
  //   )

  // }


  onClickUser(){

  }

 
}
