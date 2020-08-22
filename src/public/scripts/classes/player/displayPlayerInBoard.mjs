function getRandomPosition({ width, height }) {
  return {
    y: Math.floor(Math.random() * height),
		x: Math.floor(Math.random() * width)
  }
}

function positionIsAlreadyBlack(position, board) {
	// const blackSquares = board.getBlackSquares();
	// blackSquares.forEach(blackSquare => {
		// if (blackSquare === position) return true;
	// WATCH BOARD IS BLACK SQURES ALREADY
	// });
	return false;
}

function positionContainsPlayer(position) {

}

function positionFits(position, board) {
	const classes = board.getClassesOf(position);
	console.log('classes : ', classes);
	// Position must
	// - not be black
	// - not contain player
	// - not be close to player
	// - be in board
	const squareIsBlack = positionIsAlreadyBlack(position, board);

	if (squareIsBlack) return false;

	return true;
}

function displayPlayerInBoard(dimensions, board) {
  let randomPosition = {};
  do {
    randomPosition = getRandomPosition(dimensions);
  } while (!positionFits(randomPosition, board))
}

export { displayPlayerInBoard };
