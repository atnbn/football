import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root',
})
export class ApiCallService {



  constructor(private http: HttpClient) {}

  getCompetitions() {
    const url = environment.domain + '/competitions/';
    return this.http.get(url).pipe(
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
    return this.http.get(url).pipe(
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
