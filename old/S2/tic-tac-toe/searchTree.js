class SearchTree {
  constructor(game){
    this.game = game
  }

  load(){
    let board = this.game.gridMap
    
    this.availableMoves(board)
  }
  availableMoves = (board) => {
    let hasPlayed = false;
		board.forEach((line, y) => {
			line.forEach((cell, x) => {
				if (!cell && !hasPlayed) {
					hasPlayed = this.game.drawHit(x, y, this.iaPlayer);
				}
			});
		});
    let winner = this.game.getBoardWinner(board) 
    console.log(winner)
    console.log(this.game.gridMap)
    switch(winner) {
      case 'tie':
        console.log("tie")
         break;
      case this.game.iaPlayer:
        console.log("IA")
        
        break;
      case this.game.humanPlayer:
        console.log("human")
        
        break;
    }
  }

  

}
