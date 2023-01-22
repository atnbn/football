import {
  Component,
  SimpleChanges,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent {
  selectedCompetition: number | undefined;
  selectedMatchday: number | undefined;
  competitions: any;
  matches: any;
  matchdays!: unknown[];

  constructor(private apiCallService: ApiCallService) {}

  ngOnInit(): void {
    this.callCompetitons();
  }

  callCompetitons() {
    this.apiCallService.getCompetitions().subscribe(
      (competitions) => {
        this.competitions = competitions;
        console.log(this.competitions);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCompetition'].currentValue) {
      console.log('changes');
      this.apiCallService
        .getMatchdays(changes['selectedCompetition'].currentValue)
        .subscribe(
          (matchdays) => {
            this.matchdays = [...new Set(matchdays)];
            console.log(this.matchdays);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  changeState() {
    if (this.selectedCompetition) {
      console.log(this.selectedCompetition);
      this.apiCallService.getMatchdays(this.selectedCompetition).subscribe(
        (matchdays) => {
          this.matchdays = [...new Set(matchdays)];
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getMatches(): void {
    if (this.selectedCompetition && this.selectedMatchday) {
      this.apiCallService
        .getMatches(this.selectedCompetition, this.selectedMatchday)
        .subscribe(
          (matches) => {
            this.matches = matches;
            console.log(this.matches);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
