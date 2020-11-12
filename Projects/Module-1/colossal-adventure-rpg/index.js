const readlineSync = require('readline-sync')

let isAlive = true


const playerName = readlineSync.question("What is your name?")


console.log(`Hi ${playerName}! Welcome to the Colossal RPG! This is a game where you walk around and try not to die. Walk around some. You have 5 life point thingys. Lose all 5 and you die. You lose life point thingys when monsters hit you. Monsters never die. Have fun.`)


var playerPoints = ['$','$','$','$','$'];

var playerItems = [];

function Inventory (name, points, items) {
    this.name = playerName;
    this.points = playerPoints;
    this.items = items;
}
var playerInv = new Inventory(playerName, playerPoints, playerItems); 

while (isAlive === true) {
    var initialChoice = readlineSync.question(`Press 'w' to Walk. Press 'x' to Exit Game. Press 'p' or type 'print' to view your inventory. Press enter to enter your choice`, {limit: ['p', 'x', 'w', 'print']});
        if (initialChoice === 'x') {
            console.log('Thanks for playing.')
            isAlive = false;
        }
        if (initialChoice === 'p') {
            console.log(playerInv);
        }
        if (initialChoice === 'print') {
            console.log(playerInv)
        }
        if (initialChoice === 'w') {
            var walkMessage = 'You are walking'
            console.log(walkMessage)
            var randomNum = (Math.floor(Math.random() * 16));
            if (randomNum <= 4) {
                var monsterMessage = `A monster has appeared!`;
                    console.log(monsterMessage)
                    var secChoice = readlineSync.keyIn(`Press 'f' to face it. Press 'r' run for your life.`, {limit: `$<f, r>`})
                    if(secChoice === 'r') {
                        console.log('Thanks for playing.')
                        isAlive = false;
                    }
                    if (secChoice === 'f') {
                        var randomNum2 = (Math.floor(Math.random() * 2))
                            if (randomNum2 === 0) {
                                console.log(`The monster you are facing is the Bad Barber. Here are his three superpowers 1) He always has Nintendocore blasting at full volume whenever you go to his shop 2) His legal name is Bad Barber 3) He always pushes your hairline back 4 inches no matter how many times you tell him not to.`)
                                var barbChoice = readlineSync.keyIn(`Press 'f' to fight it.`, {limit: `$<f>`})
                                if (barbChoice === 'f') {
                                    var randomNum3 = Math.floor(Math.random()* 20)
                                    if (randomNum3 >= 10) {
                                        playerItems.push('razor')
                                        playerPoints.push('$')
                                        console.log(`You survived! You earned one life point thingy and a razor. These new items will go into your inventory.`)
                                    }
                                    if (randomNum3 < 10) {
                                        console.log(`Sorry you got beat up. Your life point thingys now equal 0. You are dead. Goodbye.`)
                                        isAlive = false;
                                    }
                                }
                            }
                            if (randomNum2 === 1) {
                                console.log(`The monster you are facing is Dracula. Here are his powers. 1) He can suck your blood 2) He can turn into a bat 3) He can cook but only boiled asparagus.`)
                                var dracChoice = readlineSync.keyIn(`Press 'f' to fight it.`, {limit: `$<f>`})
                                if (dracChoice === 'f') {
                                    var randomNum4 = Math.floor(Math.random()* 20)
                                    if (randomNum4 >= 10) {
                                        playerItems.push("baby bat")
                                        playerPoints.push("$")
                                        console.log(`You survived! You earned one life point thingy and a baby bat. These new points will go into your inventory.`)
                                    }
                                    if (randomNum4 < 10) {
                                        console.log(`Sorry you got beat up. Your life point thingys now equal 0. You are dead. Goodbye.`)
                                        isAlive = false;
                                    }
                                }
                            }        
                            if (randomNum2 === 2) {
                                console.log('The monster you are facing is Thanos. Here are his powers. 1) Super strength 2) Infinity Stone Gauntlet 3) Good dad.')
                                var thanChoice = readlineSync.keyIn(`Press 'f' to fight it.` , {limit: `$<f>`})
                                if (thanChoice === 'f') {
                                    var randomNum5 = Math.floor(Math.random()* 20)
                                    if (randomNum5 >= 10) {
                                        console.log(`You survived! You earned one life point thingy and a wig. These new items will go into your inventory.`)
                                        playerItems.push("wig")
                                        playerPoints.push("$")
                                    }
                                    if (randomNum5 < 10) {
                                        console.log(`Sorry you got beat up. Your life point thingys now equal 0. You are dead. Goodbye.`)
                                        isAlive = false;
                                    }
                                }    
                            }
                    }
            }

        } 

    
}


