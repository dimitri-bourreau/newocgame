import { initiateBoardGame } from './game/initiate-board.mjs';
import { initiateWeapons } from './game/initiate-weapons.mjs';
import { listenToResetBtn } from './game/reset-game.mjs';

listenToResetBtn('restart-game-btn');
initiateBoardGame();
const weapons = initiateWeapons();
const players = initiatePlayers(weapons);
