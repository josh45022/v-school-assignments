var width = document.getElementById("box");
width.style.padding = "400px";
width.style.border = "5px solid black";
width.style.margin = "100px";

var boxColor = document.getElementById("box");

document.getElementById("box").addEventListener("mouseover", function () {
    boxColor.style.backgroundColor = 'blue';
} )

document.getElementById("box").addEventListener("mousedown",function () {
    boxColor.style.backgroundColor = 'red';
} )
document.getElementById("box").addEventListener("mouseup",function () {
    boxColor.style.backgroundColor = 'yellow';
})
document.getElementById("box").addEventListener("dblclick", function () {
    boxColor.style.backgroundColor = 'green';
})
document.getElementById("box").addEventListener("wheel", function () {
    boxColor.style.backgroundColor = 'orange';
})
document.addEventListener("keypress", function (e) {
    console.log(e.key);
    if (e.key === 'b') {
        boxColor.style.backgroundColor = 'blue';
    } 
    else if (e.key === 'r') {
        boxColor.style.backgroundColor = 'red';
    } 
    else if (e.key === 'g') {
        boxColor.style.backgroundColor = 'green';
    } 
    else if (e.key === 'y') {
        boxColor.style.backgroundColor = 'yellow';
    } 
    else if (e.key === 'o') {
        boxColor.style.backgroundColor = 'orange';
    }
})



