import { BoardGame } from './classes/boardGame.mjs';
import { listenToResetBtn } from './game/reset-game.mjs';

const board = new BoardGame();

board.initiateBoardGame('board-game');
listenToResetBtn('restart-game-btn');
