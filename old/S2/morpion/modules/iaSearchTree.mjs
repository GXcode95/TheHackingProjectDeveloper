import { Board } from './board.mjs'

export class iaSearchTree {
  constructor(board,maxDepth = 3 ){
    this.board = board
    this.maxDepth = maxDepth
    this.root = null
    this.nodesMap = new Map()
  }
  
  getBestMove(board=this.board, maximizing = true, callback = () => {}, depth = 0) {
    //clear nodesMap if the function is called for a new move
    if(depth == 0) this.nodesMap.clear();

    //If the board state is a terminal one, return the heuristic value
    if(board.checkWin() || depth === this.maxDepth ) {
      if(board.winner === 'O') {
        return 100 - depth
      } else if (board.winner === 'X') {
        return -100 + depth
      }
      return 0
    }

    if (maximizing) {
      // Initialise best a la plus petit valeur possible
      let best = -100
      // Loop sur les moves possible
      board.getAvailableMoves().forEach(boardCase => {
        // créer une copy temporaire du board
        const child = new Board(3, board.cases)
        // Simuler un coup 
        child.update("O", boardCase.position)
        
        //Recursively calling getBestMove this time with the new board
        // and minimizing turn and incrementing the depth
        const nodeValue = this.getBestMove(child, false, callback, depth + 1)
        
        //Updating best value
        best = Math.max(best, nodeValue)

        //Si la recusion est fini, map each heuristic value with it's moves indices
        if (depth == 0) {
          //Comma separated indices if multiple moves have the same heuristic value
          const moves = this.nodesMap.has(nodeValue)
            ? `${this.nodesMap.get(nodeValue)},${boardCase.position}`
            : boardCase.position
          this.nodesMap.set(nodeValue, moves)
        }
      })

      // Si la recursion est fini return la position du meilleur move 
      // ou une position random parmis les mailleur moves si il y en a plusieur
      if (depth == 0) {
        console.log("la nodesmap => ", this.nodesMap)
        console.log("le best => ", this.nodesMap.get(best))
        let ret;
        if (typeof this.nodesMap.get(best) == "string") {
          console.log("STRING")
          const arr = this.nodesMap.get(best).split(",")
          const rand = Math.floor(Math.random() * arr.length)
          ret = arr[rand]
        } else {
            ret = this.nodesMap.get(best)
        }
        //run a callback after calculation and return the index
        callback(ret)
        return ret
      }
      console.log("BEST +> ", best)
      //If not main call (recursive) return the heuristic value for next calculation
      return best
    }

    //$------------------------------------------------------------------------------------$//
    //$------------------------------------------------------------------------------------$//


    if (!maximizing) {
      // Initialise best a la plus grande valeur possible
      let best = 100;
      // Loop sur les moves possible
      board.getAvailableMoves().forEach(boardCase => {
        // créer une copy temporaire du board
        const child = new Board(3, board.cases)
        // Simuler un coup 
        child.update("X", boardCase.position)

        //Recursively calling getBestMove this time with the new board
        // and minimizing turn and incrementing the depth
        let nodeValue = this.getBestMove(child, true, callback, depth + 1);
        
        //Updating best value
        best = Math.min(best, nodeValue);

        //Si la recusion est fini, map each heuristic value with it's moves indices
        if (depth == 0) {

          //Comma separated indices if multiple moves have the same heuristic value
          const moves = this.nodesMap.has(nodeValue)
              ? this.nodesMap.get(nodeValue) + "," + index
              : index;
            this.nodesMap.set(nodeValue, moves);
        }
      });

      //If it's the main call, return the index of the best move or a random index if multiple indices have the same value
      if (depth == 0) {
        let returnValue;
        if (typeof this.nodesMap.get(best) == "string") {
          const arr = this.nodesMap.get(best).split(",");
          const rand = Math.floor(Math.random() * arr.length);
          returnValue = arr[rand];
        } else {
          returnValue = this.nodesMap.get(best);
        }
        //run a callback after calculation and return the index
        callback(returnValue);
        return returnValue;
      }
      //If not main call (recursive) return the heuristic value for next calculation
      return best;
    }
  }
}



class Node {
  constructor(board){
    this.board = board
    this.val = null
    this.childs = []
    // on va utilisé ses coordonées pour l'affichage en tableau
    // this.x = 0
    // this.y = 0
  }


}