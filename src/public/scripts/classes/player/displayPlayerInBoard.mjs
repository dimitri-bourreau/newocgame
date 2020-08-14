function getRandomPosition({ width, height }) {
  return {
    width: Math.floor(Math.random() * width)
  }
}

function isThereAnotherPlayerAround(position) {

}

function displayPlayerInBoard(dimensions) {
  let randomPosition = {};
  do {
    randomPosition = getRandomPosition(dimensions);
  }
}

export { displayPlayerInBoard };