import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('token')) {
      const Authorization = 'Bearer ' + localStorage.getItem('token');

      return next.handle(httpRequest.clone({ setHeaders: { Authorization } })); 
    }
    return next.handle(httpRequest);
  }
}
