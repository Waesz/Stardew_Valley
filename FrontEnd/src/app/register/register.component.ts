import { Router } from '@angular/router';
import { User } from './../interface/User';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetUserService } from '../service/get-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  


RegisterForm = new FormGroup({
name : new FormControl("",Validators.max(15)),
lastName : new FormControl("",Validators.max(15)),
pseudo  : new FormControl("",[Validators.max(10),Validators.required]),
email : new FormControl("",[Validators.email,Validators.required]),
password : new FormControl("",[Validators.max(15),Validators.required])
}
)

constructor(private getUserService: GetUserService,private router : Router){

}


registerUser(){
let {name,lastName,pseudo,email,password}=  this.RegisterForm.value;


const user: User = {
name: name!,
lastName: lastName!,
pseudo: pseudo!,
email: email!,
password:password!
};


this.getUserService.createUser(user).subscribe(
(Response)=> {console.log(Response);
  this.router.navigate(['/'])
}

,
(error: any)=> console.log(error),
()=> console.log("User created")


);

}




}
