import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  url = 'http://localhost:5000';
  accessToken = null;

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const token = accessToken ? accessToken : "";
      const helper = new JwtHelperService();
    } catch (err: any) {
      return false;
    }
  }


}
