
for (i = 0; i < 10; i++) {
    console.log(i);
}

for (i = 9; i > -1; i--) {
    console.log(i);
}

var fruits = ["banana", "orange", "apple", "kiwi"]

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

function pusher (num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(i)
    }
    return arr;
}
console.log(pusher(10))


for(i = 0; i < 102; i++) {
    if(i % 2 === 0) {
       console.log(i) 
    }
}

var newFruit = [];
var oldFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (i = 0; i < oldFruit.length; i++) {  
    if(i % 2 === 0) {
        newFruit.push(oldFruit[i]);   
    }
}
console.log(newFruit)