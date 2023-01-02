import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetAstucesVillageoisService } from '../service/get-astuces-villageois.service';
import { ObjectsService }from'../service/objects.service';

@Component({
  selector: 'app-astuce-details',
  templateUrl: './astuce-details.component.html',
  styleUrls: ['./astuce-details.component.css']
})
export class AstuceDetailsComponent implements OnInit{


id!:number;
title="";
text="";
idVillageois!:number;
approved = false;
sourceImage="";
 object = {
  Nom : String,
  Vit : String,
  Adresse : String,
  Mariage : String,
  id : this.idVillageois!
};




  constructor(private getAstucesService: GetAstucesVillageoisService,private objectsService: ObjectsService,private route :ActivatedRoute, private router : Router){
    
  }





  async ngOnInit(): Promise<void> {
   this.route.paramMap.subscribe((params : ParamMap)=>{
    this.id = Number(params.get('id')!);
   })
   this.AstuceInfo()



 
  }


  async AstuceInfo(){

     this.getAstucesService.getAstuce(this.id).subscribe(
      (Response : any) =>{ 
      
        this.text = Response.text;
        this.title = Response.title;
        this.idVillageois = Response.idVillageois;
        this.approved = Response.approved;
        this.infoObject(Response.idVillageois)
        if(this.idVillageois == 0) this.sourceImage="../../assets/image/Emily.png";
        if(this.idVillageois == 1) this.sourceImage="../../assets/image/Alex.png";
      },
      (error: any)=> {console.log(error)}
    )

    
  }


  infoObject(i:number){

this.objectsService.getObject(i).subscribe(
  
(Response : any)=>{
  

  console.log(Response);
this.object.Nom = Response.Nom;
this.object.Vit = Response.Vit;
this.object.Mariage = Response.Mariage;
this.object.Adresse = Response.Adresse;
},



)



  }




  }

  




