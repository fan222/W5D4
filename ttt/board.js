class Board {
  constructor() {
    this.grid = new Array(3);

    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array (3);
    }
  }

  won() {

  }

  winner() {

  }

  empty(pos) {

  }

  placeMark(pos) {

  }
}

const board = new Board();
// console.log(board.grid);

board.grid()

module.exports = Board;
