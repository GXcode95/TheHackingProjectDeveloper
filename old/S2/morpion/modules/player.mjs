import { iaSearchTree } from './iaSearchTree.mjs'
import { Board } from './board.mjs'
import { Case } from './case.mjs'

export class Player {
  constructor(name, symbol){
    this.name = name
    this.symbol = symbol
  }

}
export class IA extends Player {
  constructor(name, symbol) {
    super(name, symbol)
  }

  chooseMove(board) { 
    // console.log(board)
    
    //let bestMove = this.bestMove(board)
    //console.log("  L'IA a joué en ", bestMove)
    //return bestMove
    
    const moves = board.getAvailableMoves()
    for(let move of moves){
    console.log("  L'IA a joué en ", move.position)
    return move.position
    }
  }

//todo Pour le searchTree. NOT WORKING ATM
  // bestMove(board) {
  //   // copy the board
  //   let casesCopy = []
  //   for(let boardCase of board.cases) {
  //     let newCase = new Case(boardCase.position, boardCase.symbol)
  //     casesCopy.push(newCase)
  //   }
  //   const boardCopy = new Board(3,casesCopy)

  //   // instancie le tree avec le nouveauboard
  //   const tree = new iaSearchTree(boardCopy)
  //   return tree.getBestMove()

  // }
  
}