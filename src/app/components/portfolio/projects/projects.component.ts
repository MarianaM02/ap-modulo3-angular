import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any = []
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    var currentUser = JSON.parse(sessionStorage.getItem("currentUser") + "");
    if (currentUser) {
      this.projectService.getProjectByUserId(parseInt(currentUser.id)).subscribe(data => {
        this.projects = data;
      }
      );

    }
  }

}
