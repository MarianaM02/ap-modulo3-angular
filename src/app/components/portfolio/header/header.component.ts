import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from 'src/app/models/Profile';
import { EventService } from 'src/app/services/event.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profile?:any;
  constructor(private profileService:ProfileService, private eventService:EventService) { 
  }

  ngOnInit(): void {
    var currentUser = JSON.parse(sessionStorage.getItem("currentUser")+"");
    if (currentUser) {
      this.profileService.getProfileByUserId(parseInt(currentUser.id)).subscribe(data => {
        this.profile = data;
      }
      );
    }

  }
}
