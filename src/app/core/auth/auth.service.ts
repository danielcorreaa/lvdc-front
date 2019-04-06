import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:8080/oauth/token?grant_type=password&'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,
              private userService:UserService ) { }

  authenticate(username:string, password:string):any{
      let url = API_URL + 'username='+username +'&password=' + password;
      let credentials = 'cliente' + ":" + '123';  
      let httpOptions = {
        headers: new HttpHeaders({          
          "Authorization" :"Basic " + btoa(credentials),
          "Content-Type":  "application/x-www-form-urlencoded",
        })
      }; 

      const body = 'grant_type=password'+'username='+username +'&password=' + password;
      
      return this.http
          .post<any>(url ,body, httpOptions)
          .pipe(tap(res => {            
             const acessToken = res.access_token;
             this.userService.setToken(acessToken);
             console.log(acessToken)
          }))
  }

  
  
}
