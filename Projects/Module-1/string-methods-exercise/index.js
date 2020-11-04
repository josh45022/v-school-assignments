function capandLower (string) {
    var upString = string.toUpperCase()
    var lowString = upString.toLowerCase()
    console.log(upString+lowString);
}
var string1 = capandLower("Hello")


function findMiddleIndex (string) {
    var finalNum = Math.floor(string.length / 2)
    console.log(finalNum)
}
var string2 = findMiddleIndex("Halibut Sandwich")

function returnFirstHalf (string) {
    var position = Math.floor(string.length/2)
    var finalString = string.slice(0, position)
    console.log(finalString);
}
var string3 = returnFirstHalf("Elephant")

function capAndLower2 (string) {
    var specPosition = Math.floor(string.length/2)
    var finalString = string.slice(0,specPosition)
    var finString1 = finalString.toUpperCase()
    var finalString2 = string.slice(specPosition)
    var finString2 = finalString2.toLowerCase()
    console.log(finString1 + finString2)
}

var string4 = capAndLower2 ("Construction")