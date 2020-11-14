//Exercise 1
var arr = [1, 3, 5, 2, 90, 20]

arr.sort(function leasttoGreatest(a, b) {
    return a - b
})

console.log(arr)

 //Exercise 2
arr.sort(function greatestToLeast (a,b) {
    return b-a
})

console.log(arr)

//Exercise 3
var arr2 = ["dog", "wolf", "by", "family", "eaten"]

arr2.sort(function lengthSort (a,b) {
    return a.length-b.length
})

console.log(arr2)

//Exercise 4
console.log(arr2.sort())

//Exercise 5
var arr3 = [
{ name: "Quiet Samurai", age: 22 },
{ name: "Arrogant Ambassador", age: 100 },
{ name: "Misunderstood Observer", age: 2 },
{ name: "Unlucky Swami", age: 77 }
]

arr3.sort(function (a,b) {
    return a.age - b.age
})

console.log(arr3)