/* write a function that takes an array as an argument and returns 
   the sum of all the items. assume values are all numbers. 
*/
var arraySum = function(array){
    var sum = 0;
    for(var i = 0; i < array.length; ++i){
      sum += array[i];
    }
    return sum;
}