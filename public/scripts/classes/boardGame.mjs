class BoardGame {
  constructor(length = 10, width = 10) {
    this.length = length;
    this.width = width;
  }

  initiateBoardGame(id) {
    if (typeof id !== 'string') throw new Error('id must be string');

    const domElt = document.getElementById(id);
    let boardGame = document.createElement('div');
    boardGame.id = 'computed-board';
    boardGame.classList.add('container');

    for (let rowIndex = 1; rowIndex <= this.length; rowIndex++) {
      let row = document.createElement('div');
      row.classList.add('board-row');
      row.classList.add('row');
      row.classList.add(`x-${rowIndex}`);
      for (let squareIndex = 1; squareIndex <= this.width; squareIndex++) {
        let square = document.createElement('div');
        square.classList.add('board-square');
        square.classList.add(`y-${squareIndex}`);
        row.append(square);
      }
      boardGame.append(row);
    }

    return domElt.append(boardGame);
  }
}

export { BoardGame };
