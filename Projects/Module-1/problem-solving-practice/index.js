
function largest(array) {
   array.sort(function (a,b) {
        return b-a;
   })
   for (i=0; i < 1; i++) {
   console.log(array[0])
   }
}

const largestNum = largest(['1','6','2','3','4']);



const secArr = ["#3", "$$$", "C%4!", "Hey!"];


secArr.forEach(function (item) {
        if (item.includes("!") === true) {
            console.log(item);
        }
})

function isDivisible (num1, num2) {
    if (num1 % num2 === 0) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}

const numbers = isDivisible(4,2)

