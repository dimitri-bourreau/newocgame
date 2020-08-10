import { getBoardDimensions } from './board-game/get-board-dimensions.mjs';
import { makeSomeSquaresBlack } from './board-game/make-some-squares-black.mjs';

function initiateBoardGame() {
  const dimensions = getBoardDimensions();
  makeSomeSquaresBlack(dimensions);
  return null;
}

export { initiateBoardGame };
