
//Exercise 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8]

doubleNumbers = (num) => num * 2;


console.log(arr.map(doubleNumbers))

//Exercise 3: for some reason it worked when I used 2 returns and not one. I thought that return ended the code. ????
//I think it is because the function can end at
    
let arr2 = ["john", "jacob", "jingleHeimer", "schmidt"]

 var capitalizeNames = arr2.map(function (name) {
    if (name === "jacob") {
         return name.toUpperCase()
    }
    if (name !== "jacob") {
        return name
    }
})

console.log(capitalizeNames)


//Exercise 2
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8]

stringItUp = (num) => num.toString();


console.log(arr3.map(stringItUp))


//Exercise 4


var peopleArray = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

var namesOnly = peopleArray.map(function (people) {
    return people.name

})

console.log(namesOnly)


//Exercise 5
var makeStrings = peopleArray.map(function (people) {
    if (people.age >= 18) {
        return people.name + ' can go to the Matrix!'
    }
    if (people.age < 18) {
        return people.name + ' is under age!!!'
    }
})

console.log(makeStrings)

//Exercise 6
var h1 = document.createElement('h1')
var h2 = document.createElement('h2')


var readyToPutInTheDOM = peopleArray.map(function (people) {
         h1.innerHTML = people.name
         h2.innerHTMl = people.age
    return people
    
})
console.log(h1)