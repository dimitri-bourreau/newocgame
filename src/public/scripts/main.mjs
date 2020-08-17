import { Board } from './classes/board.mjs';
import { initiatePlayers } from './game/initiate-players.mjs';
import { initiateWeapons } from './game/initiate-weapons.mjs';
import { listenToResetBtn } from './game/reset-game.mjs';

const weapons = initiateWeapons();
const players = initiatePlayers(weapons);
const board = new Board('computed-board', players);

// Initiate
listenToResetBtn('restart-game-btn');
board.initGame(players);

// Game
