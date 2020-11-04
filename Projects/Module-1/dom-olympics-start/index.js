var newHeader = document.createElement("h1");
newHeader.textContent = "JavaScript Made This!!";
var oldHeader = document.getElementById("header");
oldHeader.prepend(newHeader);




var newHeader1 = document.createElement("h6");
newHeader1.textContent = "Joshua Ben-Baba";
newHeader1.style.color = "orange";
newHeader.append(newHeader1);

var newHeader1Pt2 = document.createElement("span")
newHeader1Pt2.textContent = "   Made this Javascript";
newHeader1Pt2.style.color = "black";
newHeader1.append(newHeader1Pt2);



document.getElementById("clear-button").addEventListener("click", function (e) {
    console.log(e.click);
    var destroyer = document.querySelector(".messages");
    destroyer.style.display = 'none';
})

document.addEventListener("keypress", function (j){
    console.log(j.key);
    if (j.key === 'g') {
        var nicer1 = document.querySelectorAll(".left");
        for (var i = 0; i< nicer1.length; i++) {
            nicer1[i].textContent = "Thank you for being so kind."
        }
    } else if (j.key === 'n') {
        var nicer2 = document.querySelectorAll (".right");
        for (var i = 0; i< nicer2.length; i++) {
            nicer2[i].textContent = "No. Thank YOU for being so kind."
        }
    }
     
})