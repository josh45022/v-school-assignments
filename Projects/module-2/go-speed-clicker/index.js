var form = document["form1"]
form.numofclicks.value = localStorage.getItem("clickcounter")

document.addEventListener("click", function (e) {
    e.preventDefault    
    form.numofclicks.value++
    localStorage.setItem("clickcounter", form.numofclicks.value++
    )
    
})


    
