import { getBoardDimensions } from './board-game/get-board-dimensions.mjs';
import { makeSomeSquaresBlack } from './board-game/make-some-squares-black.mjs';

function drawBoard() {
  const dimensions = getBoardDimensions();
  makeSomeSquaresBlack(dimensions);
}

function insertPlayers({ player1, player2 }) {
  console.log(player1, player2);
}

function initiateBoardGame(players) {
  drawBoard();
  insertPlayers(players);
}

export { initiateBoardGame };
