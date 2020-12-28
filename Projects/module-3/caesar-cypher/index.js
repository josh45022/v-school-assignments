var readline = require('readline-sync');

var input = readline.question('Welcome to the Best Encoded Message Maker Ever. What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? to the right'));

var splitInput = input.split(" ")
var finalResult = []

var inputMapper = splitInput.map(
    function(word, index) {
        var slicedInput = splitInput.slice(index, index + 1) //had to do + 1 because this range is exclusive
        var joinedSlice = slicedInput.join()
        var reSlicedInput = joinedSlice.split('')
        var inputLetterChanged = reSlicedInput.map(function(letter){
            if(letter.toUpperCase() != letter.toLowerCase() ) {
                var alteredcharCode = (letter.charCodeAt(0) + shift)
                var newString = String.fromCharCode(alteredcharCode)
                return (newString)
            }
        })
        
        var joinedInput = inputLetterChanged.join('')
        finalResult.push(joinedInput)
        
    }
)


var joinedFinalResult = finalResult.join(" ")

console.log(`Your encoded text is "${joinedFinalResult}"!`)

