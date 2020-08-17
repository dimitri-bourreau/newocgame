function getRandomPosition({ width, height }) {
  return {
    y: Math.floor(Math.random() * height),
		x: Math.floor(Math.random() * width)
  }
}

function positionIsAlreadyBlack(position, blackSquares) {
	blackSquares.forEach(blackSquare => {
		if (blackSquare === position) return true;
	});
	return false;
}

function positionContainsPlayer(position) {

}

function positionFits(position, board) {
	// Position must
	// - not be black
	// - not contain player
	// - not be close to player
	// - be in board
	const squareIsBlack = positionIsAlreadyBlack(position, blackSquares);

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
