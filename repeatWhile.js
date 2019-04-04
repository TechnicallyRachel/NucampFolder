// using a wbhile loop

function repeat(string, num) {
  let repeatedString = "";
  while (num > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeat("abc", 3);
