// write a function that returns the sum of all the numbers from 0 to number
var rangeSum = function(number) {
    var sum = 0;
    if(number < 0){
      for(var i = number; i < 0; ++i){
        sum += i;
      }
    }else{
      for(var i = 0; i <= number; ++i){
        sum += i;
      }
    }
    return sum;
  }