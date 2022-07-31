import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';

@Injectable({
  providedIn: 'root'
})
export class JobExpService {
  url: string = "https://ap-portfolio-web.herokuapp.com/api/job-experience";
  constructor(private http: HttpClient) { }

  getJobExpById(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  updateJobExp(jobExp: Experience) {
    return this.http.put(this.url + "/" + jobExp.id, jobExp);
  }

  getJobExpByUserId(id: number) {
    return this.http.get(this.url + "/user/" + id);
  }

  createJobExp(jobExp: Experience) {
    return this.http.post(this.url, jobExp);
  }

}
