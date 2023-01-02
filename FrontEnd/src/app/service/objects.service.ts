import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {ObjectVillageois} from '../interface/ObjectVillageois'
@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  constructor(private http: HttpClient) { }

  getObejctsUrl = "http://localhost:3000/objects/"
  getAllObejctsUrl = "http://localhost:3000/getObjects"




  getObject(id:Number): Observable<ObjectVillageois>{
    return this.http.get<ObjectVillageois>(this.getObejctsUrl+id);
  } 


getAllObjects(): Observable<ObjectVillageois[]>{
  return this.http.get<ObjectVillageois[]>(this.getAllObejctsUrl);

}






}
