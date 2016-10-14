const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numLeft, completionCallBack) {
  if (numLeft > 0) {
    reader.question("Enter a number: ", num => {
      sum += parseInt(num);
      console.log(sum);

      addNumbers(sum, numLeft - 1, completionCallBack);
    });
  } else if (numLeft === 0) {
    completionCallBack(sum);
    reader.close();
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
