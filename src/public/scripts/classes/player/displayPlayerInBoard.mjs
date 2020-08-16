function getRandomPosition({ width, height }) {
  return {
    y: Math.floor(Math.random() * height),
		x: Math.floor(Math.random() * width)
  }
}

function isThereAnotherPlayerAround(position) {

}

function positionFits(position) {
	// Position must
	// - not be black
	// - not contain player
	// - not be close to player
	// - be in board
}

function displayPlayerInBoard(dimensions) {
  let randomPosition = {};
  do {
    randomPosition = getRandomPosition(dimensions);
  } while (!positionFits(randomPosition))
}

export { displayPlayerInBoard };
