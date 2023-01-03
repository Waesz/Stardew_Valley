import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetUserService } from '../service/get-user.service';
import {AuthInterceptor} from '../interceptors/auth.interceptor'
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{




  loginForm = new FormGroup({
    email : new FormControl("",[Validators.email,Validators.required]),
    password : new FormControl("",[Validators.max(15),Validators.required])
    })



    constructor(private getUserService: GetUserService,private router : Router){
      
     
    }
  ngOnInit(): void {
 
    
    if(AuthInterceptor.accessToken!='')this.router.navigate(['/']);

  }
    


      loginUser(){

       

      this.getUserService.loginUser(this.loginForm.value).subscribe(
      (Response : any)=> {
       
      if(Response.status == 200){AuthInterceptor.accessToken = Response.body.token;

     this.router.navigate(['/'])
    

    
      }
    },
      (error: any)=>alert("mot de passe ou email non valide.")
      
      );
      
      }
      











}
