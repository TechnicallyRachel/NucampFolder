//repeat function using if else

function repeat(string, times) {
  if(times < 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeat(string, times - 1);
}
repeat("x", 5);
