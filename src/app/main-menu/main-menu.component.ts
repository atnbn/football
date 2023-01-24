import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { GameListComponent } from '../game-list/game-list.component';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  @Input() selectedCompetition: number | undefined;
  selectedMatchday: number | undefined;
  competitions: any;
  isVisible: boolean = false;
  matches: any;
  matchdays: number | undefined;
  matchdayArray: number[] = [];
  constructor(private apiCallService: ApiCallService) {}

  ngOnInit(): void {
    this.callCompetitions();
  }

  callCompetitions() {
    this.apiCallService.getCompetitions().subscribe(
      (competitions) => {
        this.competitions = competitions;
        console.log(competitions);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  checkValue() {
    this.competitions.find((competition: any) => {
      if (competition.id === this.selectedCompetition) {
        this.matchdays = competition.currentSeason.currentMatchday;
        this.matchdayArray = [...Array(this.matchdays).keys()].map(
          (x) => x + 1
        );
      }
    });
  }

  loadMatchdays() {
    console.log(this.selectedCompetition);

    if (this.selectedCompetition) {
      this.apiCallService.getMatchdays(this.selectedCompetition).subscribe(
        (matchdays) => {
          this.matchdays = matchdays;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getMatches() {
    if (this.selectedCompetition && this.selectedMatchday) {
      this.apiCallService
        .getMatches(this.selectedCompetition, this.selectedMatchday)
        .subscribe(
          (matches) => {
            this.matches = matches;
            // this.sortByDate();
            console.log(this.matches);
            this.isVisible = true;
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
  sortByDate() {
    this.matches.sort(
      (
        a: { utcDate: string | number | Date },
        b: { utcDate: string | number | Date }
      ) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime()
    );
  }
}
