var head = document.getElementsByClassName('header')
var headArr = Array.prototype.slice.call(head)
headArr.forEach(function (e) {
    e.style.textAlign = "center"
})


document.body.style.backgroundColor = "#93E9BE"

var footer1 = document.querySelector(".fp")
footer1.style.position = "absolute"
footer1.style.right = "0"
footer1.style.top = "2000px"

var images = document.querySelectorAll(".image")

var imgArr = Array.prototype.slice.call(images)

imgArr.forEach(function (f) {
    f.style.display = "block"
    f.style.marginLeft = "auto"
    f.style.marginRight = "auto"
})

var form = document["form1"]


var buttonVar = form.button



buttonVar.addEventListener("click", function(event) {
    event.preventDefault()
    
    var goombasTot = parseInt(form.goombas.value) * 5

    var bombombsTot = parseInt(form.bombombs.value) * 7  

    var cheepcheepsTot = parseInt(form.cheepcheeps.value) * 11

    form.totalprice.value = goombasTot + bombombsTot + cheepcheepsTot
    form.goombas.value = "";
    form.bombombs.value = "";
    form.cheepcheeps.value = "";


    
    
})

