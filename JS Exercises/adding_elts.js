var content = document.querySelector('body');
var ul = document.createElement('ul');

var li1 = document.createElement('li');
li1.innerHTML = "First Element";
var li2 = document.createElement('li');
li2.innerHTML = "Element #2";
var li3 = document.createElement('li');
li3.innerHTML = "Last Element";

content.appendChild(ul);

var content1 = document.querySelector('ul');
content1.appendChild(li1);
content1.appendChild(li2);
content1.appendChild(li3);