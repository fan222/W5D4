class Game {
  constructor (board = [[3,2,1],[],[]]) {
    this.towers = board;
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

  run (reader, completionCallback) {
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }

      this.print();
      if (this.isWon()) {
        console.log("You won");
        completionCallback();
      } else {
        this.run(completionCallback);
      }
    });
  }

  promptMove (reader, callback) {
    console.log(this.print());
    reader.question("Which tower do you want to move from, and which do you want to move it to? ", (answer) => {
      answer = answer.split(",");

      let startTower = parseInt(answer[0]);
      let endTower = parseInt(answer[1]);

      callback(startTower, endTower);

    })
  }

}

module.exports = Game;
