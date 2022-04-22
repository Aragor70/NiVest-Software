import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivestService {

  constructor(private http: HttpClient) { }
  
  private _url: string = 'https://nivest-api.m-prus.uk/api/users'
  // api/users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this._url)
  }

}
