var form = document["form1"]

form.addEventListener ("submit", function (e) {
    e.preventDefault()
    var firstName = form.firstname.value
    var lastName = form.lastname.value
    var age = form.age.value
    var gender = form.gender.value
    var loc = form.location.value
    //var dietMessage = form.diet.checked
    const dietArr = []
    for (i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            dietArr.push(form.diet[i].value)
        }
    }
    alert(`First Name(${firstName}) Last Name(${lastName}) Age(${age}) Gender(${gender}) Location(${loc}) Diet(${dietArr})`)
})