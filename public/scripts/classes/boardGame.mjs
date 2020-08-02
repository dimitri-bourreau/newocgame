class BoardGame {
  constructor(length = 10, width = 10) {
    this.length = length;
    this.width = width;
    this.globalHeightInPx = 700;
  }

  initiateBoardGame(id) {
    if (typeof id !== 'string') throw new Error('id must be string');

    const domElt = document.getElementById(id);
    let boardGame = document.createElement('div');
    boardGame.id = 'computed-board';
    boardGame.classList.add('container');

    for (let rowIndex = 1; rowIndex <= this.length; rowIndex++) {
      let row = document.createElement('div');
      const rowHeight = `${this.globalHeightInPx / this.length}px`;
      row.classList.add('board-row');
      row.classList.add('row');
      row.classList.add(`x-${rowIndex}`);
      row.style.minHeight = rowHeight;
      for (let squareIndex = 1; squareIndex <= this.width; squareIndex++) {
        let square = document.createElement('div');
        square.classList.add('board-square');
        square.classList.add(`y-${squareIndex}`);
        square.style.minWidth = `${100 / this.width}%`;
        square.style.minHeight = rowHeight;
        row.append(square);
      }
      boardGame.append(row);
    }

    return domElt.append(boardGame);
  }
}

export { BoardGame };
