

function bigFunction () {
    var fruit = ["banana", "apple", "orange", "watermelon"];
    var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
    vegetables.pop("lettuce");
    fruit.shift("banana");
    var orangeIndex = fruit.indexOf("orange");
    fruit.push('1')
    var vegSize = vegetables.length;
    var newVeg = vegetables.push('3');
    var food = fruit.concat(vegetables)
    food.splice(4,2);
    food.reverse()
    var finale = food.toString() 
    console.log(finale)
    return
}







var yeah = bigFunction()