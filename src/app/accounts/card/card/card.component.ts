import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    accountid:string="";
    accountname:string="";
    newAccount!: FormGroup;
    accountdata:any;
    listItems=[]
  

  constructor(private http:HttpClient,private formBuilder:FormBuilder){
  
  }
   
  onSubmit():void{
    // this.http.post("http://192.168.0.113/admin",this.newAccount.value).subscribe(
    //   (res)=>{this.accountdata=res},
    //   (err)=>{console.log('res')}
    // )
    this.listItems
  }



}
