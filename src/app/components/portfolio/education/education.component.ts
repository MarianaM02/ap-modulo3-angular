import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationExperiences:any = [];
  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
    var currentUser = JSON.parse(sessionStorage.getItem("currentUser") + "");
    if (currentUser) {
      this.educationService.getEducationByUserId(parseInt(currentUser.id)).subscribe(data => {
        this.educationExperiences = data;
      }
      );

    }
  }

}
