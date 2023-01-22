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
    const url = 'https://api.football-data.org/v2/competitions/';
    return this.http.get(url, { headers: this.headers }).pipe(
      map((data: any) =>
        data.competitions.map(
          (competition: { id: any; name: string; code: string }) => ({
            id: competition.id,
            name: competition.name,
            code: competition.code,
          })
        )
      )
    );
  }
  getMatches(competitionId: number, matchday: number) {
    const url = `https://api.football-data.org/v4/${competitionId}/matches?matchday=${matchday}`;
    return this.http.get(url, { headers: this.headers });
  }

  getMatchdays(competitionId: number) {
    const url = `http://api.football-data.org/v4/competitions/2003/matches?matchday=1 `;
    console.log(url);
    return this.http
      .get(url, { headers: this.headers })
      .pipe(
        map((data: any) =>
          data.filter.map((match: { matchday: any }) => match.matchday)
        )
      );
  }
}

// championsleauge, Primeira lIGA, Premier leauge england, eredivisie netherlands, bundesliga germany , ligue 1 france, serie a italy , la liga spain, chamionship england, serie a brazil, worldcup world, europe cchampionships
