var form = document["form1"]
//var numOfClicks = form.numofclicks.value

var clickCounter = form.numofclicks.value

document.addEventListener("click", function (e) {
    e.preventDefault    
    form.numofclicks.value = +(form.numofclicks.value) + 1
    localStorage.setItem("clickcounter", form.numofclicks.value)


})



