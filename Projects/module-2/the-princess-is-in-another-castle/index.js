let gameActive = true //idek
const nameChoices = ["Mario", "Luigi"]
let lifePoints = 10
//let statusOptions = ["Powered Up", "Big","Small", "Dead"]

   class Player {
        constructor (status, gameActive) {
            this.name = this.setName(nameChoices)
            this.totalCoins = 0
            this.status = status
            this.hasStar = false
            this.gameActive = gameActive
        }
        setName (namePicked) {
            return namePicked[Math.floor(Math.random()*2)]
        }
        gotHit () {
            lifePoints--
            return this.print()
        }
        gotPowerUp () {
            lifePoints++
            return this.print()
        }
        addCoin () {
            this.totalCoins++
            return this.print() 
        }
        
        print () {
            return console.log(`
Name: ${this.name} 
Total Coins: ${this.totalCoins} 
Status: ${this.status}`)
        }
    }


/*let nameArr = ["Mario", "Luigi"]


function setName2 (namePicked) {
    return namePicked[Math.floor(Math.random()*2)]
}
*/

//console.table(currentPlayer)

let currentPlayer = new Player('Powered Up')

    let myInterval = setInterval(
    function getRandomArbitrary() {
        
        let realRandomNum = Math.floor(Math.random()*3);
        if(lifePoints === 11) {
            currentPlayer.status = "Powered Up"
        }
        if(lifePoints > 12) {
            currentPlayer.status = "Big"
            currentPlayer.hasStar = true
            if(currentPlayer.hasStar === true) {
                console.log(`You earned a star!`)
            }
            
        }
        if(lifePoints === 9) {
            currentPlayer.status = "Small"
        }
        if(lifePoints <= 8) {
            currentPlayer.status = "Dead"
            currentPlayer.print()
            return clearInterval(myInterval)
        }
        if (realRandomNum === 0) {
            currentPlayer.gotHit()
                
        }
        if (realRandomNum === 1) {
            currentPlayer.gotPowerUp()
                
        }
        if (realRandomNum === 2) {
            currentPlayer.addCoin()
                
        }
        
    }
    , 500)

