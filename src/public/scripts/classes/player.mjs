import { insertDataInDom } from './player/insertDataInDom.mjs';
import { displayPlayerInBoard } from './player/displayPlayerInBoard.mjs';

class Player {
  constructor({ name, id, picture, weapon }) {
    this.name = name;
    this.picture = picture;
    this.id = id;
    this.weapon = weapon;
    this.health = 100;
    this.turn = id == 'player-1' ? true : false;
  }
}

Player.prototype.insertDataInDom = insertDataInDom;
Player.prototype.displayPlayerInBoard = displayPlayerInBoard;

export { Player };
