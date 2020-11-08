const readlineSync = require('readline-sync')

let isAlive = true

console.log("What's goody! Welcome to the Colossal RPG! Walk around some. You have 10 life point thingys. Lose all 10 and you die. You lose life point thingys whenm monsters hit you. Monsters never die. Have fun.")

const playerName = readlineSync.question("What is your name?")

console.log(`Welcome ${playerName} !`)

while (isAlive === true) {
    var initialChoice = readlineSync.keyIn(`Press 'w' to Walk. Press 'x' to Exit Game. Press 'p' or type 'print'. Press enter to enter your choice
    `);
        if (initialChoice === 'x') {
            console.log('Thanks for playing.')
            isAlive = false;
        }
        if (initialChoice === 'p') {
            function Inventory (points, name, items) {
                this.points = points;
                this.name = playerName;
                this.items = items;
                console.log(playerInv);

            }
            var playerInv = new Inventory('none') 
        
        }
        if (initialChoice === 'w') {
            var walkMessage = 'You are walking'
            console.log(walkMessage)
            var randomNum = (Math.floor(Math.random() * 16));
            if (randomNum <= 4) {
                var monsterMessage = `A monster has appeared!`;
                    console.log(monsterMessage)
                    var secChoice = readlineSync.keyIn(`Press 'f' to face it. Press 'r' run for your life.`, {limit: `$<f, x>`})
                    if(secChoice === 'r') {
                        console.log('Thanks for playing.')
                        isAlive = false;
                    }
                    if (secChoice === 'f') {
                        var randomNum2 = (Math.floor(Math.random() * 2))
                            if (randomNum2 === 0) {
                                console.log(`The monster you are facing is the Bad Barber. Here are his three superpowers 1) He always has Nintendocore blasting at full volume whenever you go to his shop 2) His legal name is Bad Barber 3) He always pushes your hairline back 4 inches no matter how many times you tell him not to.`)
                                var barbChoice = readlineSync.keyIn(`Press 'f' to fight it.`)
                                if (barbChoice === 'f') {
                                    var randomNum3 = Math.floor(Math.random()* 20)
                                    if (randomNum3 >= 10) {
                                        console.log(`You survived! You earned one life point thingy and a razor. Type 'print' or 'p' to view your inventory`)
                                    }
                                    if (randomNum3 < 10) {
                                        console.log(`Sorry you got beat up. Your life point thingys now equal 0. You are dead. Goodbye.`)
                                        isAlive = false;
                                    }
                                }
                            }
                            if (randomNum2 === 1) {
                                console.log(`The monster you are facing is Dracula. Here are his powers. 1) He can suck your blood 2) He can turn into a bat 3) He can cook but only boiled asparagus.`)
                                var dracChoice = readlineSync.keyIn(`Press 'f' to fight it.`)
                                if (dracChoice === 'f') {
                                    var randomNum4 = Math.floor(Math.random()* 20)
                                    if (randomNum4 >= 10) {
                                        console.log(`You survived! You earned one life point thingy and a baby bat. Type 'print' or 'p' to view your inventory`)
                                    }
                                    if (randomNum4 < 10) {
                                        console.log(`Sorry you got beat up. Your life point thingys now equal 0. You are dead. Goodbye.`)
                                        isAlive = false;
                                    }
                                }
                            }        
                            if (randomNum2 === 2) {
                                console.log('The monster you are facing is Thanos. Here are his powers. 1) Super strength 2) Infinity Stone Gauntlet 3) Good dad.')
                                var thanChoice = readlineSync.keyIn(`Press 'f' to fight it.`)
                                if (thanChoice === 'f') {
                                    var randomNum5 = Math.floor(Math.random()* 20)
                                    if (randomNum5 >= 10) {
                                        console.log(`You survived! You earned one life point thingy and a wig. Type 'print' or 'p' to view your inventory`)
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


