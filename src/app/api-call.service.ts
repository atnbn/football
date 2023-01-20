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
    const url = 'https://api.football-data.org/v2/competitions';
    return this.http.get(url, { headers: this.headers }).pipe(
      map((data: any) =>
        data.competitions.map((competition: { id: any; name: any }) => ({
          id: competition.id,
          name: competition.name,
        }))
      )
    );
  }
  getMatches(competitionId: number, matchday: number) {
    const url = `https://api.football-data.org/v4/competitions/${competitionId}/matches?matchday=${matchday}`;
    return this.http.get(url, { headers: this.headers });
  }

  getMatchdays(competitionId: number) {
    const url = `https://api.football-data.org/v4/competitions/${competitionId}/matches`;
    return this.http
      .get(url, { headers: this.headers })
      .pipe(
        map((data: any) =>
          data.matches.map((match: { matchday: any }) => match.matchday)
        )
      );
  }
}
