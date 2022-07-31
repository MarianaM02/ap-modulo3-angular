import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url:string = "http://localhost:9000/api/profile";
  constructor(private http:HttpClient) { }

  getProfiles(){
    return this.http.get<Profile[]>(this.url);
  }

  updateProfile(profile:Profile){
    return this.http.put(this.url+"/"+profile.id, profile);
  }

  getProfileById(id:number):Observable<Profile>{
    return this.http.get<Profile>(this.url+"/"+id);
  }

  getProfileByUserId(id:number):Observable<Profile>{
    return this.http.get<Profile>(this.url+"/user/"+id);
  }

}
