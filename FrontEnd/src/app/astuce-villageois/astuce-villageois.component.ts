import { GetAstucesVillageoisService } from './../service/get-astuces-villageois.service';
import { interfaceAstuceVillageois } from './../interface/interfaceAstuceVillageois';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-astuce-villageois',
  templateUrl: './astuce-villageois.component.html',
  styleUrls: ['./astuce-villageois.component.css']
})
export class AstuceVillageoisComponent implements OnInit{


  Astuces: interfaceAstuceVillageois [] = [];


constructor(private getAstucesService: GetAstucesVillageoisService, private router : Router) {


}




  ngOnInit(): void {
 
    this.AllAstuces();

  }



 AllAstuces(){


      this.getAstucesService.getAllAstuces().subscribe(
      (Response : any)=> {
    
        console.log(Response)

        this.Astuces = Response;
      },
      (error: any)=>{ console.log(error)}
      
      )}

  

}
