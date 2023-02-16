import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

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

  // Await Method
  async callCompetitions() {
    try {
      this.competitions = await this.apiCallService
        .getCompetitions()
        .toPromise();
      console.log(this.competitions);
    } catch (error) {
      console.log(error);
    }
  }

  async getMatches() {
    if (this.selectedCompetition && this.selectedMatchday) {
      try {
        this.matches = await this.apiCallService
          .getMatches(this.selectedCompetition, this.selectedMatchday)
          .toPromise();
        console.log('DAta for matches', this.matches);
        this.isVisible = true;
      } catch (error) {
        console.log(error);
      }
    }
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
}

// Subscribe Method

/*callCompetitions() {
  this.apiCallService.getCompetitions().subscribe(
    (competitions) => {
      this.competitions = competitions;
      console.log(competitions);
    },
    (error) => {
      console.log(error);
    }
  );
}*/
// Subscribe Method

/*
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
*/
