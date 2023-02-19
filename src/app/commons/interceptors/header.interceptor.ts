import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addTokenToRequest(req));
  }

  private addTokenToRequest(req: HttpRequest<any>): HttpRequest<any> {
    const bearer = localStorage.getItem('bearer') || '';

    const headers = req.headers
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + bearer);

    return req.clone({ headers });
  }
}
