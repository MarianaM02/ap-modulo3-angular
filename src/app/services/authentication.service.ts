import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = "http://localhost:9000/api/login";
  currentSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log("AuthenticationService está corriendo");
    this.currentSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  Login(user:any): Observable<any> {
    console.log("Login: " + JSON.stringify(user));
    return this.http.post(this.url, user).pipe(
      map(data => {
        if(data){
          sessionStorage.setItem('currentUser', JSON.stringify(data));
          this.currentSubject.next(data);
          return data;
        }
        return;
      }));
  }
}
