class Turn {
  constructor(game, players) {
    this.game = game
    this.players = players
    this.board = game.board
  }

  start = () =>{
    this.startMessage()
    this.playersByInit().forEach(player => {
      this.fight(this.players, player)
    })
    this.game.playerLeft().forEach(player => player.reset())
  }
  
  playersByInit = () => {
    return this.players.sort(
      (previousPlayer, currentPlayer)=>{ return currentPlayer.init - previousPlayer.init  })
  }
  
  fight = (players, player) => {
      if ( player.isAlive() ) {
        this.fightMessage(player)
        let target = player.getTarget(players)
        player.chooseAction(target)
      }
  }


  fightMessage(player) {
    console.log(`           COMBAT (${player.name})    ${player.status}`)
  }

  startMessage() {
    console.log("                     ========================================")
    console.log("                     ****************************************")
    console.log("                     ====           TURN " + this.game.turnLeft + "           ====")
    console.log("                     ****************************************")
    console.log("                     ========================================")
  
  }
}