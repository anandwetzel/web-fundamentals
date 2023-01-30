// random color generator 
var randomColor = function(){
    var rvalue = function() {
        return Math.round(Math.random()*255); 
    }
    return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

// get button element from DOM
var button = document.querySelector('button');

// create event listener to change color on button click
button.onclick = function(){
    this.style.color = randomColor();
}