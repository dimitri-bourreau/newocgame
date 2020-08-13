import { initiateBoardGame } from './game/initiate-board-game.mjs';
import { initiatePlayers } from './game/initiate-players.mjs';
import { initiateWeapons } from './game/initiate-weapons.mjs';
import { listenToResetBtn } from './game/reset-game.mjs';

const weapons = initiateWeapons();
const players = initiatePlayers(weapons);

// Initiate
listenToResetBtn('restart-game-btn');
initiateBoardGame(players);

// Game
