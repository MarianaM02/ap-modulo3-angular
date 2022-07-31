import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private subjectProfile = new Subject<Profile>();
  
  constructor() { }

  emitirProfile(profile:Profile){
    console.log("hola emitirProfile");
    this.subjectProfile.next(profile)
  }

  escucharProfile():Observable<Profile>{
    return this.subjectProfile.asObservable();
  }

}
