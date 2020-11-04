var enemies=["Lex","Batman","Dark","Brain","General","Dooms"];

funtion whoWins (is-there-kryptonite,enemyName) {
    if (is-there-kryptonite) {
        return "Superman beats " + enemyName + ", of course";
    }
    else () {
        return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++) {
        var is-there-kryptonite:
            if (i % 2 === 0) {
                is-there-kryptonite = true;
            } else {
                is-there-kryptonite = false;
            }
console.log(whoWins(is-there-kryptonite,enemies[i]));
}

function loisAttraction ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Mat.random()*10)+1);
}

console.log( loisAttraction ()) ;

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent = false;
        superman= true;
        console.log("Now I'm Superman!");
    }
}