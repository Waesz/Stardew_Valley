import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'; 
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

private getProfileUrl = 'http://localhost:3000/user/getUserInfo';

private createUserUrl = 'http://localhost:3000/user/register';

private loginUserUrl = 'http://localhost:3000/user/login';

private updateUserUrl = 'http://localhost:3000/user/update';


  constructor(private http: HttpClient) {

   }

   getUserInfo(): Observable<User>{
    return this.http.get<User>(this.getProfileUrl);
  } 


  createUser(user:User): Observable<User>{
   
    return this.http.post<User>(this.createUserUrl,user);
  }

  
  loginUser(user :any): Observable<User>{
    return this.http.post<User>(this.loginUserUrl,user,{
      observe: 'response' as 'body'
    });
  }


  updateUser(user:any): Observable<User>{

    return this.http.post<User>(this.updateUserUrl,user)
    
  }

}
