import { Component, Input } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }

  @Input() matches: any | undefined;
  displayedColumns: string[] = ['HomeTeam', 'AwayTeam', 'Score', 'Date'];
  constructor() {}
  ngOnInit(): void {
    console.log(this.matches);
  }
}
