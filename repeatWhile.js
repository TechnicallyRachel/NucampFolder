// using a wbhile loop

function repeat(string, num) {
  let i = "";
  while (num > 0) {
    i += string;
    num--;
  }
  return i;
}
repeat("x", 3);
