import { Component, OnInit, Output } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profile?:any;
  @Output() contacto = {
    "githubLink": "",
  "linkedinLink": ""
  }
  constructor(private profileService:ProfileService) { 
  }

  ngOnInit(): void {
    var currentUser = JSON.parse(sessionStorage.getItem("currentUser")+"");
    if (currentUser) {
      this.profileService.getProfileByUserId(parseInt(currentUser.id)).subscribe(data => {
        this.profile = data;
        this.contacto.githubLink = this.profile.githubUrl;
        this.contacto.linkedinLink = this.profile.linkedinUrl;
      }
      );
    }

  }
}
