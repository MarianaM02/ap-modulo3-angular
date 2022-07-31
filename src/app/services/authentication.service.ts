import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { elementAt, map } from 'rxjs/operators';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = "http://localhost:9000/api/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient, private userService: UserService) {
    console.log("AuthenticationService está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
    console.log("Current User: " + JSON.stringify(this.currentUserSubject));
  }

  Login(user: any): Observable<any> {
    console.log("Login: " + JSON.stringify(user));
    return this.http.post(this.url, user).pipe(
      map(data => {
        if (data) {
          sessionStorage.setItem('currentUser', JSON.stringify(data));
          this.currentUserSubject.next(data);
          return data;
        }
        return;
      }));
  }

  Logout() {
    // remove user from session storage to log user out
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
function Logout() {
  throw new Error('Function not implemented.');
}

