import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CompetitionContent} from "../Interfaces/competition-content";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token : string = '65a2ef03bcc349f5a8fc6616e8490fbb'
  constructor() {}

  intercept(request: HttpRequest<CompetitionContent>, next: HttpHandler): Observable<HttpEvent<CompetitionContent>> {
    const tokenizedReq = request.clone({
      setHeaders:{
        Authorization: 'Bearer' + this.token,
      }
    })
    return next.handle(tokenizedReq)
}}
