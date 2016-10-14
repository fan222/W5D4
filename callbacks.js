const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} bigger than ${el2}? `, answer => {
    if (answer === "yes") {
      callback(true);

    } else if (answer === "no") {
      callback(false);

    } else {
      console.log(`Please answer 'yes' or no'`);

      askIfGreaterThan(el1, el2, callback);
    }
  });
}

// askIfGreaterThan(1,2, (answer) => console.log(answer));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// innerBubbleSortLoop([1,3,1,6,4], 0, false, () => console.log(`in outer bubble sort`));


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log(`Sorted array: ${JSON.stringify(arr)}`);

  reader.close();
});
