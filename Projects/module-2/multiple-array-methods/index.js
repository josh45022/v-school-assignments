var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
//Exercise 1
function bigSorter (arr) {
     var older18 = arr.filter(function (person) {
        return person.age >= 18
    })
    var byName = older18.sort(function (a, b) {
        if(a.lastName < b.lastName) { 
            return -1; 
     }
        if(a.lastName > b.lastName) {      
            return 1; 
     }

    })
    console.log(byName)

    var embed = byName.map(function (user) {
        return '<li>'  + user.firstName + user.lastName + 'is' + user.age + '</li>'
    })
        //return older18*/
        return embed

}

console.log(bigSorter(peopleArray))






