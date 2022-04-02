import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivestService {

  constructor(private http: HttpClient) { }
  
  private _url: string = 'http://139.59.150.253:5000/api/users'
  // api/users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this._url)
  }

}
