import { AuthInterceptor } from './../interceptors/auth.interceptor';
import { ObjectsService } from './../service/objects.service';
import { GetAstucesVillageoisService } from './../service/get-astuces-villageois.service';
import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ObjectVillageois } from '../interface/ObjectVillageois';

@Component({
  selector: 'app-astuce-creator',
  templateUrl: './astuce-creator.component.html',
  styleUrls: ['./astuce-creator.component.css']
})
export class AstuceCreatorComponent implements OnInit{

  AddAstuceForm = new FormGroup({
    title: new FormControl("",[Validators.max(50),Validators.min(5),Validators.required]),
    tag1 : new FormControl("",Validators.max(50)),
    tag2  : new FormControl("",Validators.max(50)),
    text : new FormControl("",[Validators.max(2000),Validators.min(15),Validators.required]),

    }
    )

    get getTitle(){
      return this.AddAstuceForm.get('title');
    }

    get getText(){
      return this.AddAstuceForm.get('text');
    }

  loaded =false;
  allVillageois: any;
  valobj:any;



constructor(private objectsService: ObjectsService, private AstuceCreate : GetAstucesVillageoisService,private router : Router){



}
 ngOnInit(): void {
this.PopulateVillageois() ;
    

  }


  public placeHolder: string = 'Select a game';

v!:any;


PopulateVillageois(){

  this.objectsService.getAllObjects().subscribe(

    (Response:any)=>{
      console.log(Response)
      this.allVillageois = Response;
      
      this.loaded= true;
     
    }



  )
}




    addAstuce(){
      let {title,tag1, tag2,text}=  this.AddAstuceForm.value

     
      if(AuthInterceptor.accessToken=='')return this.router.navigate(['/login']);


        if(this.valobj == null)return alert("Selectionnez un villageois.");
    
        

        if(this.getTitle?.invalid)return alert("Le titre est obligatoire");
        if(this.getTitle?.errors?.['minlength'])return alert("Le titre doit avoir 5 caractéres minimum");
        

        if(this.getText?.invalid)return alert("Le text est obligatoire");
        if(this.getText?.errors?.['minlength'])return alert("Le texte doit avoir 5 caractéres minimum");
        
      let Ast = {
        title : title!,
        text :text!,
        idVillageois : Number(this.valobj)
      }

      this.AstuceCreate.AddAstuce(Ast).subscribe(
        (Response:any)=> {console.log(Response);
          alert("Astuce créé");
          return this.router.navigate(['/astuces/showAll'])
        }
        
        ,
        (error: any)=> console.log(error),
        
        
        
        );
        

    }



    update(e:any){
      this.valobj = e.target.value;
    }


}
