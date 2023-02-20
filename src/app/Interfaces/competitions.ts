import {CurrentSeason} from "./current-season";

export interface Competitions {
  area: object,
  code:string,
  currentSeason: CurrentSeason,
  emblem: string,
  id: number,

  lastUpdated: number,
  name:string,
  numberOfAvailableSeasons: number,
  plan:string,
  type:string

}
