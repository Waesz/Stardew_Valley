import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LogCheckService {


  private log = new BehaviorSubject(false);
  log$ = this.log.asObservable();

  changeData(log: boolean) {
    this.log.next(log)
  }



  constructor() { }
}
