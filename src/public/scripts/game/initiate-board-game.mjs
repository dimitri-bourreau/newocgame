import { getBoardDimensions } from './board-game/get-board-dimensions.mjs';
import { makeSomeSquaresBlack } from './board-game/make-some-squares-black.mjs';

function initiateBoardGame(players) {
  const dimensions = getBoardDimensions();
  makeSomeSquaresBlack(dimensions);
  Object.keys(players).forEach((key) => {
    const player = players[key];
    player.insertDataInDom();
    player.displayPlayerInBoard(dimensions);
  });
}

export { initiateBoardGame };
