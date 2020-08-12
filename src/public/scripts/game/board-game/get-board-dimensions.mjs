function getNumberFromString(string) {
  return string
    .split('')
    .filter((elt) => /^\d+$/.test(elt))
    .join('');
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

function getBoardDimensions() {
  const board = document.getElementById('computed-board');
  return {
    width: getWidthOfBoard(board),
    height: getHeightOfBoard(board),
  };
}

export { getBoardDimensions };
