import { Injectable } from '@angular/core';
import { GameProfile } from '../shared/model/GameProfile';
import { gameDifficult } from '../shared/gameDifficult';

@Injectable({
  providedIn: 'root'
})
export class GameService {
    private games: GameProfile[] = [
    new GameProfile(1, 'Mixed Game', " A game that has a list of English words on one side and a list of translations for the words on the other Crimson. Each word must be matched with its translation.", 'mixed-game', gameDifficult.EASY),
    new GameProfile(2, 'Match Game', "A game where for each word in the category we will present the Hebrew word and letters The English word is in messy order. The task in the game is to arrange the letters of the English word in the correct order", 'match-game', gameDifficult.MEDIUM)
  ]

  constructor() {}
    list(): GameProfile[] {
      return this.games;
}
}
