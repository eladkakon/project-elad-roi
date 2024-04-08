import { Injectable } from '@angular/core';
import { gamePlayed } from '../shared/model/gamePlayed';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
private storage = 'gamesPlayed'
list(): gamePlayed[] {
  const gamesPlayed = localStorage.getItem(this.storage);
  if (gamesPlayed){
    return JSON.parse(gamesPlayed)
  }
  return[]
}
addGamePlayed(newGame: gamePlayed) {
  const game = this.list();
  game.push(newGame);
  localStorage.setItem(this.storage, JSON.stringify(game));
}
}
 