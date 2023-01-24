import { Component, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  @Input() matches: any | undefined;
  displayedColumns: string[] = ['HomeTeam', 'AwayTeam', 'Score', 'Date'];

  constructor() {}
  ngOnInit(): void {
    console.log(this.matches);
  }
}
