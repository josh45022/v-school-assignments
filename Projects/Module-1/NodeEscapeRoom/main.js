const readline = require("readline-sync");
let isAlive = true;
const name = readline.question('What is your name?');
console.log('Hello '+ name + '!');
console.log('Welcome to the best game ever. You are in an escape room. *cue scary music* Calm down. It is going to be ok. I hope. Anyways you are in this escape room. In order to escape you need to find the key in the room and open the door. There is also a hole in the wall in this room. If you put your hand in the hole you get a million dollars. Just kidding, if you put your hand in the hole, you die. And if you stay in the room you die. Fun, right? Today I am feeling bored and might let you live IF you can get out of here. I will give you three options. Choose correct and you live. Choose incorrect and you die with me and my computer friends to tell your story (SPOILER ALERT: we wont). Finally remember these three things: 1) You cannot open the door without the key 2) You die if you put your hand in the hole. 3) Mint-chocolate-chip is not a real flavor of ice cream. Fight me.');
threeOptions = ['Put Hand in Hole','Find the Key','Open the Door'],
index = readline.keyInSelect(threeOptions, 'Which option do you choose?');

while (isAlive){ 
        

        if (threeOptions[index] === 'Put Hand in Hole') {
            console.log("You died. Restart game to try Again.");
            isAlive = false
            
        }    
        else if (threeOptions[index]=== 'Find the Key') {
            console.log("Sorry you are wrong")
            threeOptions = ['Put Hand in Hole','Find the Key','Open the Door'],
            index = readline.keyInSelect(threeOptions,'Please select another option');
            
                
        }
        else if(threeOptions[index] === 'Open the Door') {
            console.log("Sorry you are wrong.");
            threeOptions = ['Put Hand in Hole', 'Find the Key','Open the Door'],
            index = readline.keyInSelect(threeOptions, 'Please select another option');
        }
        

}

