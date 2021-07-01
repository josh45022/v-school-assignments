var form = document["form1"]
form.numofclicks.value = localStorage.getItem("clickcounter")

document.addEventListener("click", function () {
    form.numofclicks.value++
    localStorage.setItem("clickcounter", form.numofclicks.value++
    )
    
})


    
