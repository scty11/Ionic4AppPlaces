import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated: boolean = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  constructor() { }

  login(): void {
    this._userIsAuthenticated = true;
  }

  logout(): void {
    this._userIsAuthenticated = false;
  }
}
