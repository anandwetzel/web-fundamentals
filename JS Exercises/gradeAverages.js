/*
Given an array of student objects, structured like so:
var students = [
  { 
    name: "Mary", 
    age: 10, 
    grades: [90, 88, 95]
  }, 
  {
    name: "Joseph", 
    age: 11, 
    grades: [80, 100, 90, 96]
  }
];
Write a function that returns an array of grade averages.
*/
var getAverages = function(students){
    var averages = [];
    for(var i = 0; i < students.length; ++i){
      var sum = 0;
      for(var j = 0; j < students[i].grades.length; ++j){
        sum += students[i].grades[j];
      }
      sum /= students[i].grades.length;
      averages.push(sum);
    }
    return averages;
}