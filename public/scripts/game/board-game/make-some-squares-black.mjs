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
    square[0].classList.add('bg-dark');
  })
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

export { makeSomeSquaresBlack };