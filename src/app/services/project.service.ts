import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url:string = "https://ap-portfolio-web.herokuapp.com/api/project";
  constructor(private http:HttpClient) { }

  updateProject(project:Project){
    return this.http.put(this.url+"/"+project.id, project);
  }

  getProjectById(id:number){
    return this.http.get(this.url+"/"+id);
  }

  getProjectByUserId(id:number){
    return this.http.get(this.url+"/user/"+id);
  }

  createProject(project:Project){
    return this.http.post(this.url, project);
  }

}
