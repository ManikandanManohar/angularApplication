import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomService } from './service/custom.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor( private service:CustomService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.service.Gettoken();
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `BslogiKey ${token}`
        }
      })
    }
    return next.handle(request);
  }
}
