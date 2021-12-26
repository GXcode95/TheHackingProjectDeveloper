class Game {
  constructor(turnLeft = 10){
    this.turnLeft = turnLeft
  }
  createPnj = () => {
    const grace = new Fighter("Grace")
    const ulder = new Paladin("Ulder")
    const moana = new Monk("Moana")
    const draven = new Berzerker("Draven")
    const carl = new Assassin("Carl")
    const jean = new Wizard("Jean")
    const xavier = new Gambler("Xavier")  
    const players = [grace, ulder, moana, xavier, draven, carl, jean ]
    
    this.players = players
  }
  createPlayer = (playerName, className) => {
    const player = this.getPlayerClass(playerName, className)
    this.players.push(player)
  }
  getPlayerClass = (playerName, className) => {
    switch (className) {
      case 'fighter':
        return new Fighter(playerName, true)
      break;
      case 'assassin':
        return new Assassin(playerName, true)
      break;
      case 'paladin':
        return new Paladin(playerName, true)
      break;
      case 'monk':
        return new Monk(playerName, true)
      break;
      case 'wizard':
        return new Wizard(playerName, true)
      break;
      case 'berzerker':
        return new Berzerker(playerName, true)
      break;
      case 'gambler':
        return new Gambler(playerName, true)
      break;
    }
  }
  ListenClassChoice() {
    let btn = document.querySelector('input[type="button"]')
    btn.addEventListener("click", () => {
      let classChoices = document.querySelectorAll('input[name="class"]') 
      classChoices.forEach( classChoice=>{
        if (classChoice.checked) {
          let className = classChoice.id
          let playerName = document.querySelector('input[name="playerName"]').value
          if (playerName.length >= 1  ) {
            
            this.createPlayer(playerName, className)
            this.play()
            
          } else {
            alert("Please choose a Name")
          }
        }
      })
    })
  }

  launchGame() {
    this.ListenClassChoice()
    this.createPnj()
    this.board = new Board(this.players)
  }

  play() {
    this.board.displayBoard()
    this.showStatus()
    this.newTurn()
    this.isFinish() ? this.gameOver() : this.play()
    
  }

  newTurn = () => {
    const turn = new Turn(this, this.players)
    turn.start()
    this.turnLeft --
  }
  

  playerLeft = () => {
    return this.players.filter(player => player.status != "loser")
  }
  isFinish = () => {
    if (this.turnLeft == 0) return true
    if (this.playerLeft().length == 1) return true
    return false
  }
  gameOver = () => {
    this.winners = this.getwinners()
    this.board.insertWinners(this.winners)
    this.endMessage()
  }
  getwinners = () => {
    this.players.forEach(player => {
      if(player.hp > 0) player.status = "winner"
    })
    return this.players.filter(player=> player.status =="winner")
  }

  endMessage = () => {
    console.log("#######################################################")
    console.log("                   WINNERS ARE ")
    console.log("#######################################################")
    this.winners.forEach(winner=> console.log(" => " + winner.name))
    console.log("#######################################################")
  }
  showStatus = () => {
    console.log("         PLAYERS ALIVE ")
    console.table(this.playerLeft())

  }

}