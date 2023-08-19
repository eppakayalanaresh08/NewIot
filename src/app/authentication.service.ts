import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  
  login(mobileno: string, password: string) {
    const credentials = { mobileno, password };
    return this.http.post("http://192.168.0.137:8000/login/", credentials);
  }

  // confirmDeleteAccount(accountId: any){
  //   return this.http.delete("http://192.168.0.137:8000"+"/"+accountId)

  // }

}
