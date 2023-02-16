import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {

  token : any = '65a2ef03bcc349f5a8fc6616e8490fbb'

  private headers = new HttpHeaders({
    'X-Auth-Token': this.token ,
  });
  constructor(private http: HttpClient) {}

  getCompetitions() {
    const url = environment.domain + '/competitions/';
    return this.http.get(url, { headers: this.headers }).pipe(
      map((data: any) => {
       return data.competitions;
      }),
      catchError((error) => {
        console.log(error);
        return throwError(error)
      })
    );
  }

  getMatches(competitionCode: number, matchday: number) {
    const url =  environment.domain +`/competitions/${competitionCode}/matches?matchday=${matchday}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((data: any) => {
        return data.matches;
      }),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
}
