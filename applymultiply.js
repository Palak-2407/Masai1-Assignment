function multiplyNumbers(a, b) {
    return Math.multiply.apply(null, [a, b]); 
  }
  
  function multiplyNumbers(a, b) {
    function multiply(x, y) {
      return x * y;
    }
    
    return multiply.apply(null, [a, b]);
  }
  
  console.log(multiplyNumbers(5, 3)); 
  