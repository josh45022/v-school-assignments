var form = document["form1"];



form.addEventListener("submit", (event) => {
   
    event.preventDefault ()
    var item = form.itemChoice.value;
    form.itemChoice.value = "";

    var h4 = document.createElement('h4');
    h4.textContent = item;
    document.getElementById("list-of-items").append(h4)

    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    h4.append(deleteButton);
    deleteButton.addEventListener("click", (event)=>{
    h4.remove(deleteButton)
    })
})