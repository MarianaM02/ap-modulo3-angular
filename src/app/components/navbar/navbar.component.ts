import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }

  hasRoute(route: string){
    return this.router.url === route
  }

  Logout(){
    this.authService.Logout();
    // redirect to logout page
    this.router.navigate(['/logout']);
  }

}
