import { Router, Routes } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import {AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LogCheckService } from './service/log-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Stardew Valley Wiki';

constructor(private logCheckservice: LogCheckService, private router : Router){

}


@Input() signedup = false;

ngOnInit(): void {
  this.logCheckservice.log$.subscribe(res => this.signedup= res);  
   
}


disconnect(){
   this.signedup = false;
   AuthInterceptor.accessToken='';
  console.log(AuthInterceptor.accessToken);
  this.router.navigate(['/']);
}


  
}
