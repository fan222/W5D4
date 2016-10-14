// class HanoiGame {
//   run() {
//     // until all discs been moved
//     //   ask player which disc to move, to which tower
//     //   move disc to tower
//   }
// }


const Game = require ('./game');

const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


// const game = new Game();

// game.promptMove(reader, console.log, completionCallback);
// console.log(game.isValidMove(0,1));
// console.log(game.move(0,2));
// console.log(game.print());
// console.log(game.isWon());


function play() {
  console.log("Welcome to Towers of Hanoi!");
  const game = new Game([[],[3,2],[1]]);
  game.run(reader, completionCallback);
}

play();

function completionCallback() {
  reader.question("Would you like to play again? (y/n) ", answer => {
    if (answer === "y") {
      // const game = new Game();
      // game.run(reader, completionCallback);
      play();
    } else {
      reader.close();
    }
  })
};
