var form = document["form1"]
//var numOfClicks = form.numofclicks.value

//var clickCounter = form.numofclicks.value
//var numClicks = form.numofclicks.value
form.numofclicks.value = localStorage.getItem("clickcounter")

document.addEventListener("click", function (e) {
    e.preventDefault    
    form.numofclicks.value++
    localStorage.setItem("clickcounter", form.numofclicks.value++
    )
    
})


    
