function basicOp(operation, value1, value2)
{
  var solution = 0; 
  
  if (operation === '+') {
    solution = value1 + value2;
    return solution;
  } else if (operation === '-'){
    solution = value1 - value2;
    return solution;
  } else if (operation === '*') {
    solution = value1 * value2;
    return solution;
  } else if (operation === '/') {
    solution = value1 / value2;
    return solution;
  } else {
    console.log("error");
  }
}