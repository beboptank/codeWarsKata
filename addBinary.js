function addBinary(a,b) {
  var binaryArr = [];
  var c = a + b;
  
  while (c > 0) {
    binaryArr.push (c % 2);
    c >>= 1;
  }
  
  return binaryArr.reverse().join('');
  
}