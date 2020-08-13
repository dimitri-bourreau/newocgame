import { getBoardDimensions } from './board-game/get-board-dimensions.mjs';
import { makeSomeSquaresBlack } from './board-game/make-some-squares-black.mjs';

function drawBoard() {
  const dimensions = getBoardDimensions();
  makeSomeSquaresBlack(dimensions);
}

function initiateBoardGame(players) {
  drawBoard();
  Object.keys(players).forEach((key) => players[key].insertDataInDom());
}

export { initiateBoardGame };
