const Game = require ('./game');

const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});



function play() {
  console.log("Welcome to Tic Tac Toe!");
  const game = new Game();
  game.run(reader, completionCallback);
}

play();

function completionCallback() {
  reader.question("Would you like to play again? (y/n) ", answer => {
    if (answer === "y") {
      play();
    } else {
      reader.close();
    }
  })
};
