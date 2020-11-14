//Exercise 1
var arr = [3, 6, 8, 2]

var fiveAndGreaterOnly = arr.filter(function (num) {
    if (num > 5) {
        return num
    }
})

console.log(fiveAndGreaterOnly)

//Exercise 2
var evensOnly = arr.filter(function (num) {
    if(num % 2 === 0) {
        return num
    }
} )

console.log(evensOnly)

//Exercise 3
var arr2 = ["dog", "wolf", "by", "family", "eaten", "camping"]

var fiveCharactersOrFewerOnly = arr2.filter(function (name) {
    if(name.length <= 5 ) {
        return name
    }
})

console.log(fiveCharactersOrFewerOnly)

//Exercise 4
var obj1 = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

var peopleWhoBelongToTheIlluminati = obj1.filter(function (person) {
    if (person.member === true) {
    return person.member
    }
})

console.log(peopleWhoBelongToTheIlluminati)

//Exercise 5

var obj2 = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
var ofAge = obj2.filter(function (person) {
    if (person.age > 18) {
        return person.age
    }
})

console.log(ofAge)