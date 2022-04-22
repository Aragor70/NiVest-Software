import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  url = 'http://139.59.150.253:8080';
  token = null;

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    try {
      const accessToken = localStorage.getItem('token');
      const token = accessToken ? accessToken : "";
      const helper = new JwtHelperService();

      return !helper.isTokenExpired(token);
    } catch (err: any) {
      return false;
    }
  }

  public loginAttempt = (values: any) => {
    return this.http.post('https://nivest-software-api.m-prus.uk/api/auth/login/', values);
  }
  public registerAttempt = (values: any) => {
    return this.http.post('https://nivest-software-api.m-prus.uk/api/auth/register/', values);
  }


}
