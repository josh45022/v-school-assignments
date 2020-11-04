var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var countOccurrences = function(arr, val) {
    return arr.reduce((acc, elem) => {
      return (val === elem ? acc + 1: acc)    
    },0)
}
console.log(countOccurrences(officeItems, "computer"));




var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    },{
      name:"J",
      age: 7,
    },{
      age: 9
    }
  ] 

for (i=0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18? console.log("old enough"): console.log("not old enough");
}

for (i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    peopleWhoWantToSeeMadMaxFuryRoad[i].name 
} 
