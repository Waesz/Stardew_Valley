import { GetAstucesVillageoisService } from './../service/get-astuces-villageois.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ObjectVillageois } from '../interface/ObjectVillageois';
import { ObjectsService } from '../service/objects.service';

@Component({
  selector: 'app-astuce-creator',
  templateUrl: './astuce-creator.component.html',
  styleUrls: ['./astuce-creator.component.css']
})
export class AstuceCreatorComponent implements OnInit{


  loaded =false;
  allVillageois: any;




constructor(private objectsService: ObjectsService){



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


  AddAstuceForm = new FormGroup({
    title : new FormControl("",Validators.max(10)),
    tag1 : new FormControl("",Validators.max(50)),
    tag2  : new FormControl("",[Validators.max(50),Validators.required]),
    text : new FormControl("",[Validators.max(2000),Validators.required]),
    
    
    }
    )

    addAstuce(){}



}
