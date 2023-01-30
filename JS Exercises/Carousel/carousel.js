var images = [
    "/udata/DErqVR5q0Pv/longexposurewaterfall1.jpg",
    "/udata/MLE2D8Lzv6X/route66.jpg",
    "/udata/nPaBd6Mq1Ly/archesdrive.jpg",
    "/udata/1krmXeav6GB/army2.jpg",
    "/udata/1klaZD0vxjz/redwoodupwards2.jpg",
    "/udata/4WQvGrR56Qq/solduc2.jpg",
    "/udata/1koZJB2vq8k/truck4scale.jpg"
];
// increment index through images list
var currentIndex = 0; 
var incrementIndex = function(){
    ++currentIndex;
    if(currentIndex == images.length){
      currentIndex = 0;
    }
}
// change image and increment when next is clicked
var next_btn = document.getElementById('next-button');
next_btn.onclick = function(){
    incrementIndex();
    var img = document.querySelector('img');
    img.src = images[currentIndex];
}
// decrement index through images list
var decrementIndex = function(){
    if(currentIndex == 0){
      currentIndex = images.length - 1;
    }else{
        --currentIndex;
    }
}
// change image and increment when next is clicked
var prev_btn = document.getElementById('prev-button');
prev_btn.onclick = function(){
    decrementIndex();
    var img = document.querySelector('img');
    img.src = images[currentIndex];
}