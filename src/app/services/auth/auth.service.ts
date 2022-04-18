import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  url = 'http://139.59.150.253:8080';
  accessToken = null;

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const token = accessToken ? accessToken : "";
      const helper = new JwtHelperService();

      return !helper.isTokenExpired(token);
    } catch (err: any) {
      return false;
    }
  }

  public loginAttempt = (values) => {
    return this.http.post('http://localhost:5000/api/auth', values);
  }
  public registerAttempt = (values) => {
    return this.http.post('http://localhost:5000/api/users', values);
  }


}
