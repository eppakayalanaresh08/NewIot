import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  mobileno: string='';
  password: string='';
  hero: any;
  users:any;
  headers:any;
  constructor(private router:Router,private snackBar: MatSnackBar,private AuthService:AuthenticationService ,private formBuilder: FormBuilder, private http:HttpClient){
      this.loginForm=this.formBuilder.group({
        mobileno:['',[Validators.required]],
        password:['',[Validators.required]]
      })

  }
  ngOnInit(): void {
  }
  // getcsrf(){
  //   this.http.get("http://192.168.0.137:8000/get_csrf/").subscribe(
  //   (res) => {this.users=res;
  //             const csrfToken=this.users.csrf_token;
  //             console.log(csrfToken)
  //             this.headers = new HttpHeaders(
  //                          {'Content-Type':'application/json',
  //                           'X-CSRFToken':csrfToken,
  //                          });
  // })
  // console.log(this.headers)
  // return this.headers;
  // }

  // onSubmit(){
  //         console.log(this.getcsrf());
  //         this.http.post("http://192.168.0.113:8000/login/",this.loginForm.value,{headers:this.headers}).subscribe(
  //                  (res)=>{console.log(res);
  //                          this.router.navigate(['dashboard'])})
  //           }
  
  onSubmit(){

    if(this.loginForm.valid) {
      const {mobileno,password} =this.loginForm.value;
      this.AuthService.login(mobileno,password).subscribe(response=>{
       
        console.log(response)
        this.router.navigate(['dashboard'])
        if("Invalid Credentials"==response){
          this.router.navigate(['login'])
        }else if("Login Successful For Admin"==response){
          this.router.navigate(['users'])
          console.log(response)
        }else{
          this.router.navigate(['dashboard'])
        }
      },error=>{
        console.log(error)
      })
    }




    // let bodyData = {
    //   "mobileno" : this.mobileno,
    //   "password" : this.password
    // };
    // console.log(this.loginForm.value)
            //  console.log(this.getcsrf());

 
    // this.http.post("http://192.168.0.137:8000/login",this.loginForm.value).subscribe((resultData: any)=>
    // {
    //     console.log(resultData);
    //     alert("Student Registered Successfully");
    //     this.router.navigate(['dashboard'])
        
      
    //     // this.getAllStudent();
    // });
    // console.log("Error")

    





    
    // console.log(this.loginForm.value)
    // console.log({
    //   mobileno:"94994444",
    //   password:"444844"
    // })
  }

  // private showSnackbarAlert(message: string): void{
  //   this.snackBar.open(message, 'close', {duration: 3000,});
  // }




  

}

