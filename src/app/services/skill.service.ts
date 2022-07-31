import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  // TODO hard y soft skills
  url:string = "http://localhost:9000/api/skill";
  constructor(private http:HttpClient) { }

  getSkills(){
    return this.http.get(this.url);
  }

  createSkill(skill:Skill){
    return this.http.post(this.url, skill);
  }

  getSkillById(id:number){
    return this.http.get(this.url+"/"+id);
  }

  deleteSkill(id:number){
    return this.http.delete(this.url+"/"+id);
  }

  removeSkillFromUser(skillId:number, userId:number){
    return this.http.delete(this.url+"/user/"+skillId+"/"+userId);
  }

  getSkillByUserId(id:number){
    return this.http.get(this.url+"/user/"+id);
  }

}
