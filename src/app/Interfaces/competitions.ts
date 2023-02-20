import {CurrentSeason} from "./current-season";
import {Area} from "./area";

export interface Competitions {
  area: Area;
  code:string;
  currentSeason: CurrentSeason;
  emblem: string;
  id: number;

  lastUpdated: number;
  name:string;
  numberOfAvailableSeasons: number;
  plan:string;
  type:string;

}
