import { initiateBoardGame } from './game/initiate-board.mjs';
import { listenToResetBtn } from './game/reset-game.mjs';

listenToResetBtn('restart-game-btn');
initiateBoardGame();
