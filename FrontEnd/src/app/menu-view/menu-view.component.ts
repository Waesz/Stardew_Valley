import { LogCheckService } from './../service/log-check.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { GetUserService } from '../service/get-user.service';


@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit{


 @Output() LoggedIn= new EventEmitter(true);

constructor(private getUserService: GetUserService, private logCheckservice: LogCheckService){

}
  ngOnInit(): void {

    if(AuthInterceptor.accessToken!=''){
      this.logCheckservice.changeData(true);
    console.log("emmited")
    };


  }


}
