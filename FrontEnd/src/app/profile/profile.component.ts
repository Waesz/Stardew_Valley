import { Component, OnInit } from '@angular/core';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { GetUserService } from '../service/get-user.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


name ="";
lastName ="";
email ="";
pseudo ="";
password ="";

btnaction = "edit";

  constructor(private getUserService: GetUserService, private router : Router){
      
    

  }




  ngOnInit(): void {

    if(AuthInterceptor.accessToken=='')this.router.navigate(['/']);

    var savebutton = document.getElementById('savebutton')!;
var readonly = true;
var inputs = document.querySelectorAll('input[type="text"]');

savebutton.addEventListener('click',function(){
    
     for (var i=0; i<inputs.length; i++) {
     inputs[i].toggleAttribute('readonly');
     };

    if (savebutton.innerHTML == "edit") {
      savebutton.innerHTML = "save";

         } else {
      savebutton.innerHTML = "edit";
      savebutton.click =()=>{console.log("hi")};
      }
  
   });

 this.UserInfo();

}


onClick() {
  if(this.btnaction == 'edit') {
    this.btnaction = 'save';
    
  } else {
    console.log("clicked save")
    this.btnaction = 'edit';
     this.updateInfo();
    
  }
}




 updateInfo(){

  this.getUserService.updateUser({name:this.name,lastName:this.lastName,email:this.email,pseudo:this.pseudo,password:this.password}).subscribe(

    (Response : any)=> {
       console.log(Response)
     },
     (error: any)=> console.log(error)


  );



 }




 UserInfo(){


      this.getUserService.getUserInfo().subscribe(
      (Response : any)=> {
       this.name  = Response.name;
       this.lastName  = Response.lastName;
       this.pseudo  = Response.pseudo;
       this.email  = Response.email;
      
        console.log(Response)
      },
      (error: any)=> console.log(error)
      
      );
      
      }
    










}
