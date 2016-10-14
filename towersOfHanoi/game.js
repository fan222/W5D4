const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor (board = [[3,2,1],[],[]]) {
    this.towers = board;
  }

  promptMove (callback, completionCallback) {
    console.log(this.towers);
    reader.question("Which tower do you want to move from, and which do you want to move it to? ", (answer) => {
      answer = answer.split(",");

      let startTower = parseInt(answer[0]);
      let endTower = parseInt(answer[1]);

      let win = callback(startTower, endTower);
      if (win) {
        this.print();
        console.log("You won");
        completionCallback();
      } else {
        this.run(completionCallback);
      }
    })
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (startTowerIdx < 0 || startTowerIdx > 2 ||
          endTowerIdx < 0 || endTowerIdx > 2) return false;

    let startTower = this.towers[startTowerIdx];
    let endTower = this.towers[endTowerIdx];

    return (startTower.length > 0 &&
      (endTower.length === 0 ||
        endTower[endTower.length-1] > startTower[startTower.length-1]));
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let startTower = this.towers[startTowerIdx];
      let endTower = this.towers[endTowerIdx];

      endTower.push(startTower.pop());
      return true;
    } else return false;
  }

  print () {
    return JSON.stringify(this.towers);
  }

  isWon () {
    let tower0 = this.towers[0];
    let tower1 = this.towers[1];
    let tower2 = this.towers[2];

    return (tower0.length === 0 && (tower1.length === 3 || tower2.length === 3));
  }

  run (completionCallback) {
    this.promptMove((startTowerIdx, endTowerIdx) => {
      if (this.move(startTowerIdx, endTowerIdx)) {
        console.log(this.print());
      } else {
        console.log("Invalid move!");
      }

      return this.isWon();
    }, completionCallback);
  }

  play () {
    this.run(() => reader.close());
  }
}

let game = new Game([[],[3,2],[1]]);

// game.promptMove(console.log);
// console.log(game.isValidMove(0,1));
// console.log(game.move(0,2));
// console.log(game.print());
// console.log(game.isWon());
// console.log(game.promptMove(game.testMove.bind(game)));
// game.run(() => reader.close());

game.play();
