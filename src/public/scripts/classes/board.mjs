import { getBoardDimensions } from './board-game/get-board-dimensions.mjs';
import { makeSomeSquaresBlack } from './board-game/make-some-squares-black.mjs';

class Board {
	constructor(id, players) {
		this.id = id;
		this.dimensions = getBoardDimensions(this.id);
		this.players = players;
		this.blackSquares = [];
		this.boardGame = document.getElementById(id);
	}

	initGame() {
		this.blackSquares = makeSomeSquaresBlack(this.dimensions);
		Object.keys(this.players).forEach((key) => {
			const player = this.players[key];
			player.insertDataInDom();
			player.displayPlayerInBoard(this.dimensions, this);
		});
	}

	getBlackSquares() {
		return this.blackSquares;
	}

	getClassesOf({ y, x }) {
		const rows = this.boardGame.getElementsByClassName('row');
		console.log(rows);
		const row = rows.getElementsByClassName(`x-${x}`)[0];
		const square = row.getElementsByClassName(y);
		return square.classList;
	}

	isSquareBlack() {

	}
}


export { Board };
