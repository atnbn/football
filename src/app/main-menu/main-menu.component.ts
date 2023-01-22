import {
  Component,
  SimpleChanges,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { eachDayOfInterval, format } from 'date-fns';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent {
  filteredCompetitions: any;
  matchdays: unknown[] | undefined;
  selectedMatchday: number | undefined;
  matches: any;
  selectedDate: string | undefined;
  dateOptions: any[] = [];

  selectedCompetition: number | undefined;
  competitions: any;
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
}
