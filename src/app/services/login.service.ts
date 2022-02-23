import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _currentUser?: any;

  login(loginObj: any): Observable<any> {
    return this._http.post('http://localhost:8080/auth/signin', loginObj);
  }

  constructor(private _http: HttpClient) {}

  get currentUser(): any {
    return this._currentUser;
  }

  set currentUser(user) {
    this._currentUser = user;
  }
}
