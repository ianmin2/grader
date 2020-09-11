import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private _localStorage:LocalStorageService) {}
  // ...
  public isAuthenticated(): boolean {
    const token:string = this._localStorage.get('auth');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
