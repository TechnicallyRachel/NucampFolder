//repeat function using if else

function repeat(string, num) {
  if(num < 0) 
    return "";
  if(num == 1) // would it matter if this were (times === 1)?
    return string;
  else 
    return string + repeat(string, num - 1);
}
repeat("x", 5);
