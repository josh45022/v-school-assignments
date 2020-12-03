//Pre-Question
let name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//Task 1
const carrots = ["bright orange", "ripe", "rotten"]
let mapVegetables = (arr) => {
    return arr.map((carrot) => {
        return { 
            type:"carrot",
            name:carrot 
        }
    })
}

console.log(mapVegetables(carrots))


//Task 2 
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
let filterForFriendly = (arr) => {
    return arr.filter((person) => {
        return person.friendly
    })
}
console.log(filterForFriendly(people))

//Task 3
let doMathSum = (a, b) => {
    return a + b
}

let produceProduct = (a, b) => {
    return a * b
}

//Task 4
const dude = {
    firstName: "Nick",
    lastName: "Blake",
    age: 28

}
let sentenceFunc = ({firstName = "Jane", lastName = "Doe", age= "100"}) => {
        return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
    }


console.log(sentenceFunc(dude))

//Task 5
const dude2 = {
    location: "Hawaii",
    name: "Janice"
}
let secMessage = ({location, name}) => {
    return  `    Hi ${name}! 
    Welcome to ${location}. 
    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
    
}

console.log(secMessage(dude2))