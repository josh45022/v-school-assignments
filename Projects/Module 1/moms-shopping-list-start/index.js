var form = document["form1"];



form.addEventListener("submit", (event) => {
    event.preventDefault ()
    var item = form.itemChoice.value;
    form.itemChoice.value = "";

    var h4 = document.createElement('h4');
    h4.textContent = item;
    document.getElementsByTagName("body")[0].append(h4)
})

var deleter = document.querySelector(".delete");

document.deleter.addEventListener("click", (event)=> {
    event.preventDefault ()
    h4.textContent = " ";
    console.log(event.delete);
})