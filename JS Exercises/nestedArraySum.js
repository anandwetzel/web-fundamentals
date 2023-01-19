/*  Given an array of arrays, each of which contains a set of numbers, 
    write a function that returns an array where each item is the 
    sum of all the items in the sub-array. 
*/
var arraySum = function(numbers) {
    var sums = [];
    for(var i = 0; i < numbers.length; ++i){
      var sum = 0;
      for(var j = 0; j < numbers[i].length; ++j){
        sum += numbers[i][j];
      }
      sums.push(sum);
    }
    return sums;
}