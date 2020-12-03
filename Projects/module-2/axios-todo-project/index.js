const form = document["form1"]
const button1 = form.submitbutton

function getData () {
    axios.get("https://api.vschool.io/joshuabenbaba1/todo")
    .then(response => createTodo(response.data))
    .catch(error => console.log(error))
}


function createTodo (data) {
    clearList()
        for (let i = 0; i <  data.length; i++) {
            const h1 = document.createElement('h1')
            //Get Title of Data Array Items
            h1.textContent = data[i].title
            //Get _id of Data Array Items
            const dataId = data[i]._id
            document.getElementById('appendcentral').appendChild(h1)
            //Get Completed Status of Data Array Items
            //const dataCheckStatus = data[i].completed
            const checkbox = document.createElement('input')
                checkbox.setAttribute("type", "checkbox")
                h1.appendChild(checkbox)

            const checkedTodo = {
                completed: "true"
            }

            checkbox.addEventListener('change', function (){
                if(this.checked) {
                    axios.put(`https://api.vschool.io/joshuabenbaba1/todo/${dataId}`, checkedTodo)
                }
            })
            const deleteButton = document.createElement('button')
                deleteButton.textContent = "DELETE"
                h1.appendChild(deleteButton)
            deleteButton.addEventListener("click", function() {
                document.getElementById('appendcentral').removeChild(h1)
                axios.delete(`https://api.vschool.io/joshuabenbaba1/todo/${dataId}`)
                .then(response => console.log(response))
                .catch(error => console.log(error))
            })

        }
    }

function clearList() {
    const el = document.getElementById('appendcentral')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    } 
}
getData()

button1.addEventListener("click", function (e) {
    e.preventDefault()
    const newTodo = {
        title: form.itemtitle.value,
        price: form.itemprice.value,
        description: form.itemdescrip.value,
        imgUrl: form.itemimage.value

    }
    axios.post("https://api.vschool.io/joshuabenbaba1/todo", newTodo)
    .then(response => getData())
    .catch(error => console.log(error))
    form.itemtitle.value = ""
    form.itemprice.value = ""
    form.itemdescrip.value = ""
    form.itemimage.value = ""

})




// const xhr = new XMLHttpRequest()
//         // method  // url                     // async?
// xhr.open("GET", "https://api.vschool.io/joshuabenbaba1/todo", true)
// xhr.send()



// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(data[0].title)
//     }
// }