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



// Task Two

  // Function to format array of strings based on processed numbers
  function formatArrayStrings(stringsArr, numbersArr) {
    return stringsArr.map((str, index) => {
      const num = numbersArr[index];
      if (num % 2 === 0) {
        // Capitalize string if the number is even
        return str.toUpperCase();
      } else {
        // Convert string to lowercase if the number is odd
        return str.toLowerCase();
      }
    });
  }
  