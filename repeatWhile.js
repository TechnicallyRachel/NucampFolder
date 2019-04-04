// using a while loop

function repeat(string, num) {
  let i = "";
  while (num > 0) {
    i += string;
    num--;
    //I do not understand how/why ^num-- is working...
  }
  return i;
}
repeat("x", 3);


// ---Experimental--
// function repeat(string, num) {
//   let i = "";
//   for (num > 0, i += string, num--) {

//   }
//   return i;
// }
// repeat("x", 3);
