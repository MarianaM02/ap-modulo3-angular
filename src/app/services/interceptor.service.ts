import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authenticationService:AuthenticationService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');
    var currentUser = this.authenticationService.UsuarioAutenticado;
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${currentUser.token}`
        }


      });
    }
    console.log("InterceptorService funcionando: " + JSON.stringify(currentUser));
    return next.handle(req);
  }

}
