// var form = document["form1"]

// form.addEventListener ("submit", function (e) {
//     e.preventDefault()
//     var firstName = form.firstname.value
//     var lastName = form.lastname.value
//     var age = form.age.value
//     var gender = form.gender.value
//     var loc = form.location.value
//     //var dietMessage = form.diet.checked
//     const dietArr = []
//     for (i = 0; i < form.diet.length; i++) {
//         if(form.diet[i].checked) {
//             dietArr.push(form.diet[i].value)
//         }
//     }
//     alert(`First Name(${firstName}) Last Name(${lastName}) Age(${age}) Gender(${gender}) Location(${loc}) Diet(${dietArr})`)
// })



const form = document["airline-form"];
const submit = document.getElementById("submit");
// const query = document.querySelector;
    var firstName = form.elements("firstName").value;
    var lastName = form.elements("lastName").value;
    var age = form.elements("ageth").value;
    var gender = form.elements("gender").value;
    var location = form.elements("travel-location").value;
    var diet = [];
    if (form.elements('vegan').checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (form.elements('gluten').checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements('paleo').checked) {
        diet.push(document.getElementById('paleo').value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");

    form.addEventListener("click", (event) => { 
    event.preventDefault()
    console.log(age)
        alert()
});