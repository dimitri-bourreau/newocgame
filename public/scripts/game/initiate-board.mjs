function getNumberFromString(string) {
  return string.split('').filter((elt) => /^\d+$/.test(elt));
}

function getHeightOfBoard(board) {
  const { lastElementChild } = board;
  const classNames = [...lastElementChild.classList];
  const rowRef = classNames.filter((row) => /^x/.test(row));
  const rowNumber = getNumberFromString(rowRef[0]);
  return parseInt(rowNumber[0], 10);
}

function getWidthOfBoard(board) {
  const lastSquare = board.firstElementChild.lastElementChild;
  const classNames = [...lastSquare.classList];
  const squareRef = classNames.filter((square) => /^y/.test(square));
  const squareNumber = getNumberFromString(squareRef[0]);
  return parseInt(squareNumber, 10);
}

function defineHowManyBlackSquaresNeeded({ width, height }) {
  const numberOfSquares = width * height;
  return Math.floor(numberOfSquares * 0.2);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * max + min);
}

function getRandomPosition(width, height) {
  return {
    y: getRandom(1, height),
    x: getRandom(1, width),
  };
}

function positionFits(position, positions) {
  if (positions.includes(position)) return false;
  positions.forEach((registeredPosition) => {
    const sameY = registeredPosition.y === position.y;
    const sameX = registeredPosition.x === position.x;
    if (sameX && sameY) return false;
  });
  return true;
}

function defineWhichSquareToGetBlack(howMany, { width, height }) {
  let positions = [];
  for (let square = 1; square <= howMany; square += 1) {
    if (square === 1) {
      positions.push(getRandomPosition(width, height));
    } else {
      let position = getRandomPosition(width, height);
      while (!positionFits(position, positions)) {
        position = getRandomPosition(width, height);
      }
      positions.push(position);
    }
  }
  return positions;
}

function setTheseSquaresBlack(refs) {
  refs.forEach(({ x, y }) => {
    const row = [...document.getElementsByClassName(`x-${x}`)];
    const square = row.filter(domSquare => domSquare.classList.contains(`y-${y}`));
    square[0ﬂ].classList.add('bg-dark');
  })
}

function getBoardDimensions() {
  const board = document.getElementById('computed-board');
  return {
    width: getWidthOfBoard(board),
    height: getHeightOfBoard(board),
  };
}

function makeSomeSquaresBlack(dimensions) {
  const blackSquaresNumber = defineHowManyBlackSquaresNeeded(dimensions);
  const blackSquareRefs = defineWhichSquareToGetBlack(
    blackSquaresNumber,
    dimensions
  );
  setTheseSquaresBlack(blackSquareRefs);
  return null;
}

function initiateBoardGame() {
  const dimensions = getBoardDimensions();
  makeSomeSquaresBlack(dimensions);
  return null;
}

export { initiateBoardGame };
