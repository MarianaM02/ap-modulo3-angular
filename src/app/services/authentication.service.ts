import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = "https://ap-portfolio-web.herokuapp.com/api/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient, private userService: UserService) {
    console.log("AuthenticationService está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  Login(user: any): Observable<any> {
    return this.http.post(this.url, user).pipe(
      map(data => {
        if (data) {
          sessionStorage.setItem('currentUser', JSON.stringify(data));
          this.currentUserSubject.next(data);
          console.log("Login correcto: " + JSON.stringify(data));
          console.log("Token: " + this.getToken());
          console.log(this.getTokenPayload());
          console.log("ID: " + this.getCurrentUserId());
          console.log("is Logged: " + this.isLogged());
          console.log("is Admin: " + this.isAdmin());
          return data;
        }
        return;
      }));
  }

  getToken() {
    try {
      return this.UsuarioAutenticado.token;
    } catch (error) {
      return null
    }
  }

  getTokenPayload(){
    const payload = this.getToken().split('.')[1];
    return JSON.parse(atob(payload));
  }

  isLogged() {
    return this.getToken() != null;
  }

  isAdmin() {
    // return true;
    const token = this.getToken();
    if (token) {
      const payload = this.getTokenPayload();
      return payload.roles.includes('ROLE_ADMIN');
    }
    return false;
  }

  getCurrentUserId() {
    return Number(this.UsuarioAutenticado.id);
  }

  isTokenExpired() {
    const token = this.getToken();
    if (token) { 
      const payload = this.getTokenPayload();
      const now = new Date().getTime() / 1000;
      return payload.exp < now;
    }
    return true;
  }


  Logout() {
    console.log("Loguing out");
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    console.log("is Logged: " + this.isLogged());
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}


