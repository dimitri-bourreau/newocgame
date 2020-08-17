import { getBoardDimensions } from './board-game/get-board-dimensions.mjs';
import { makeSomeSquaresBlack } from './board-game/make-some-squares-black.mjs';

class Board {
	constructor(id, players) {
		this.id = id;
		this.dimensions = getBoardDimensions(this.id);
		this.players = players;
	}

	initGame() {
		makeSomeSquaresBlack(this.dimensions);
		Object.keys(this.players).forEach((key) => {
			const player = this.players[key];
			player.insertDataInDom();
			player.displayPlayerInBoard(this.dimensions);
		});
	}
}


export { Board };
