import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "https://ap-portfolio-web.herokuapp.com/api/user";
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User>(this.url);
  }

  updateUser(user:User){
    return this.http.put(this.url+"/"+user.id, user);
  }

  getUserById(id:number){
    return this.http.get<User>(this.url+"/"+id);
  }

  getUserByEmail(email:string){
    return this.http.get<User>(this.url+"/email/"+email);
  }

}
