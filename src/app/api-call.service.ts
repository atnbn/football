import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private headers = new HttpHeaders({
    'X-Auth-Token': '65a2ef03bcc349f5a8fc6616e8490fbb',
  });
  constructor(private http: HttpClient) {}

  getCompetitions() {
    const url = 'https://api.football-data.org/v4/competitions/';
    return this.http.get(url, { headers: this.headers }).pipe(
      map((data: any) => {
        const competitionIds = [
          2019, 2014, 2016, 2013, 2000, 2018, 2015, 2012, 2003, 2084, 2017,
          2021, 2000,
        ];
        return data.competitions.filter((competition: { id: number }) =>
          competitionIds.includes(competition.id)
        );
      })
    );
  }
}
