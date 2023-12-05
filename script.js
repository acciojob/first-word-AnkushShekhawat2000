// function firstWord(s) {
//   // your code here
// }

// // Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));


function firstWord(s) {
  // Remove leading and trailing whitespaces
  const trimmedString = s.trim();

  // Find the index of the first space or the end of the string
  const spaceIndex = trimmedString.indexOf(' ');

  // Extract the first word based on the space index
  const firstWord = spaceIndex !== -1 ? trimmedString.slice(0, spaceIndex) : trimmedString;

  return firstWord;
}

// Example
const s = prompt("Enter String:");
alert(firstWord(s));
