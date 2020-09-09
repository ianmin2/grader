import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class AuthInterceptService implements HttpInterceptor {

   constructor(private _localStorage: LocalStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this._localStorage.get("auth");

    if(!authToken) return next.handle(req);

    const modifiedRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });

    return next.handle(modifiedRequest);
  }

}
