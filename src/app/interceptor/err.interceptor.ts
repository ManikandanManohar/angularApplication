import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable,pipe,throwError } from 'rxjs';
import { CustomService } from '../service/custom.service';

@Injectable()
export class ErrInterceptor implements HttpInterceptor {

  constructor( 
    private service:CustomService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
       if (error.status === 401){ 
        this.service.Logout();
       }
        return throwError( error);
      })
    );
  }
}
