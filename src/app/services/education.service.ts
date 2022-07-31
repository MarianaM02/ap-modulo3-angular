import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  url: string = "https://ap-portfolio-web.herokuapp.com/api/education";
  constructor(private http:HttpClient) { }

  updateEducation(education: Experience) {
    return this.http.put(this.url + "/" + education.id, education);
  }

  getEducationById(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  getEducationByUserId(id: number) {
    return this.http.get(this.url + "/user/" + id);
  }

  createEducation(education: Experience) {
    return this.http.post(this.url, education);
  }

}

