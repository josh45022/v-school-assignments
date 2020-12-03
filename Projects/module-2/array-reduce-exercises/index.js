//Exercise 1
var arr = [1,2,3]

var total = arr.reduce(function (final, num) {
    final += num
    return final
})

console.log(total)

//Exercise 2
var stringConcat = arr.reduce(function (final, num) {
    var yeah = final.toString(num)
    return yeah.concat(num)

})

console.log(stringConcat)

//Exercise 3 
var arr2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

var totalVotes = arr2.reduce(function (final, voter) {
    if(voter.voted) {
        final++
    }
    return final
}, 0)

console.log(totalVotes)

//Exercise 4

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

var shoppingSpree = wishlist.reduce(function (final, gift) {
    final += gift.price
    return final
},0)

console.log(shoppingSpree)

//Exercise 5

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

var flatten = arrays.reduce(function(final,array){   
    return final.concat(array)

})

console.log(flatten)

//Exercise 6

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

var voterResults = voters.reduce(function (final, voter) {
    if(voter.age <= 25) {
        final.ages18to25++
        if(voter.voted === true){
            final.ages18to25Voted++
        }

    }
    if(voter.age > 25 && voter.age <=35) {
        final.ages26to35++
        if(voter.voted === true) {
            final.ages26to35Voted++
        }
    }
    if(voter.age > 35 && voter.age <= 55) {
        final.ages36to55++
        if(voter.voted === true) {
            final.ages36to55Voted++
        }
    }
    return final

}, {ages18to25: 0, ages18to25Voted: 0, ages26to35: 0, ages26to35Voted: 0,ages36to55: 0, ages36to55Voted:0} )

console.log(voterResults)

