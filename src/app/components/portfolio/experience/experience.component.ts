import { Component, OnInit } from '@angular/core';
import { JobExpService } from 'src/app/services/job-exp.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  jobExperiences:any = [];
  constructor(private jobExperienceService:JobExpService) { }

  ngOnInit(): void {
    var currentUser = JSON.parse(sessionStorage.getItem("currentUser") + "");
    if (currentUser) {
      this.jobExperienceService.getJobExpByUserId(parseInt(currentUser.id)).subscribe(data => {
        this.jobExperiences = data;
      }
      );

    }

  }

}
