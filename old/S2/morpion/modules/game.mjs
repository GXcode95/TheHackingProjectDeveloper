import { Player } from './player.mjs'
import { IA } from './player.mjs'
import { Board } from './board.mjs'
import { Message } from './message.mjs'


export class Game {
  constructor(){
    //this.turnLeft
    //this.player
    //this.ia
    //this.board
    //this.message
    this.winner == null
  }

//$ ----- Main Functions -----
  preload() {
    this.turnLeft = 9;
    this.board = new Board()
    this.board.create()
    this.message = new Message(this)
    this.message.startMessage()
  }
  async  play() {
    // charge le board et les messages
    this.preload() 
    
    // On instance le joueur et l'ia seulement a la première partie
    if(!this.player) {
      await this.message.askPlayer()
      // Initialise l'IA
      this.newIA() 
    }
      
    // montre le board vide avant le match
    this.board.show()
    
    // Fait jouer le joueur puis l'ia, jusqu'a la fin du jeu
    this.turn()

  }
  async turn(){
    // Le joueur joue toujorus en premier
    await this.turnPlayer()
    if(this.isOver() == true) return this.end(this.player)
    //tour de l'IA
    this.turnIA()
    // Si la partie n'es pas finie on relance un tour
    return this.isOver() ? this.end(this.ia) : this.turn()
  }

//$ ----- Player -----
  newPlayer(name, symbol){ // called by  this.message.startMessage() in preload()
    this.player = new Player(name, symbol)
  }
  async turnPlayer() {
    // demande au joueur ou il veut jouer
    // board.cases index => [0-9]
    let nextMove = await this.message.askMove(this.player)
    
    // mets a jouer le board (update affiche le board en plus)
    this.board.update(this.player.symbol, nextMove )
    
    this.turnLeft-- 
  }

//$ ----- IA -----
  newIA() {
    let symbol = this.board.symbols.filter(sym => sym != this.player.symbol)[0]
    this.ia = new IA("Jarvis",symbol)
  }
  turnIA() {
    let nextMove = this.ia.chooseMove(this.board) 
    // mets a jouer le board (update affiche le board en plus)
    this.board.update(this.ia.symbol, nextMove )
    this.turnLeft--
  }

//$ ----- Checks -----
  checkWin(){
    return this.board.checkWin()
  }


//$ ----- End -----
  isOver() {
    if( this.turnLeft == 0 || this.checkWin()) 
      return true
  }
  async end(winner=this.board.winner) {
    if( winner === null ) {
      this.message.draw() 
    } else if( winner.symbol == this.ia.symbol ){
      this.message.winnerIA()
    }  else {
        this.message.winnerPlayer()
    }  
    
   return await this.reMatch() ? this.play() : this.message.endMessage()
  }
  async reMatch() {
    return await this.message.askReMatch()
  }
}
