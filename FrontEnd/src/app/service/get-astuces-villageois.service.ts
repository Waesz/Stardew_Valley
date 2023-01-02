import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { interfaceAstuceVillageois as Astuce } from '../interface/interfaceAstuceVillageois';

@Injectable({
  providedIn: 'root'
})
export class GetAstucesVillageoisService {

  constructor(private http: HttpClient) { }




  private getAstucesUrl = 'http://localhost:3000/astuces/showAll';



  private getAstuceUrl = 'http://localhost:3000/astuces/';


  getAllAstuces(): Observable<Astuce>{
    return this.http.get<Astuce>(this.getAstucesUrl);
  } 

  getAstuce(id:number): Observable<Astuce>{
    return this.http.get<Astuce>(this.getAstuceUrl+id);
  } 





}




