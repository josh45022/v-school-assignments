//Exercise 1
const collectAnimals = (...animals) => {
    let emptyArr = []
    return [...emptyArr, ...animals]
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 

//Exercise 2
const combineFruit = (fruit, sweets, vegetables) => {
        return {
            fruit,
            sweets,
            vegetables
        }
    }
console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

    

//Exercise 3

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };

const {location, duration} = vacation
  
function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation))

//Exercise 4
function returnFirst(items){
    const [firstItem] = items;
    return firstItem
}

//Exercise 5

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const [a, b, c, d, e] = favoriteActivities

function returnFavorites([a, b, c, d, e]){
    return `My top three favorite activities are ${a}, ${b}, ${c}, ${d}, and ${e}`;
}

console.log(returnFavorites(favoriteActivities))


//Exercise 7
function combineAnimals(real,magical,mysterious) {  
    return [...real, ...magical, ...mysterious]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

//Exercise 8
const product = (a, b, c, d, e) => {  
    let numbers = [a,b,c,d,e];
  
    return numbers.reduce((acc, number) => {
      return acc * number;
    }, 1)
  }

  unshift = (array, ...a) => {  
    return [...a, ...array];
  }