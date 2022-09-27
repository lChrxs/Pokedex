import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // const TOKEN: string = '';
    // console.log(TOKEN)

    // if(TOKEN == ''){
    //   return next.handle(request);
    // }

    console.log(request)
    // const USER: string = localStorage.getItem('user') ?? ''
    // const PASSWORD: string = localStorage.getItem('password') ?? ''
    // const TOKEN: string = Buffer.from(`${USER}:${PASSWORD}`).toString('base64');
    const TOKEN: string = localStorage.getItem('token') ?? ''
    if(TOKEN == ''){
      return next.handle(request);
    }
    const HEADER_REQUEST: HttpRequest<any> = request.clone({
      // headers: request.headers.set('Authorization', `Basic ${TOKEN}`)
      headers: request.headers.set('Authorization', `Bearer ${TOKEN}`)
    })
    
    console.log(HEADER_REQUEST)
    return next.handle(HEADER_REQUEST);
  }
}
