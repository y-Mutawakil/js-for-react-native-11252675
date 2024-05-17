// Task One

// Function to process the array of numbers
function processArray(arr) {
  return arr.map(num => {
    if (num % 2 === 0) {
      // Square even numbers
      return num * num;
    } else {
      // Triple odd numbers
      return num * 3;
    }
  });
}



