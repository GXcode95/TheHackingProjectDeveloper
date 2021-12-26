import { Case } from './case.mjs'

export class Board {
  constructor(size = 3, cases = []){
    this.size = size * size
    this.cases = cases 
    this.symbols=["X", "O"]
    this.winner = null
  }

  create(size = this.size) { // Initialize boards cases
    let newCase = new Case(size)
    this.cases.push(newCase)

    return size > 1 ? this.create(size - 1) : size
  }

  show() { // Output of the current board
    let extSpace = "        "
    let inSpace = "   "
    
    console.log("\n")
    for(let i = 0; i < this.cases.length; i+=3) {
      console.log(
        extSpace + this.cases[i+2].symbol,
        inSpace + this.cases[i+1].symbol,
        inSpace + this.cases[i+0].symbol,
        "\n"
        )
    }
  }

  update(symbol, position) { // change one Case symbol and show() board
      for (let i = 0; i < this.cases.length; i++){
        if (this.cases[i].position == position) 
          this.cases[i].symbol = symbol
      }
    this.show()
  }

  checkWin(cases=this.cases){
    return ( this.checkRow(cases) || this.checkCol(cases) || this.checkDiag(cases) ) 
  }
  checkRow(cases = this.cases){
    if( (cases[0].symbol == cases[1].symbol) && 
        (cases[0].symbol == cases[2].symbol) && 
        (cases[0].symbol != ".") ) {
          this.winner == cases[0].symbol
          return cases[0].symbol
        }
    

    if( (cases[3].symbol == cases[4].symbol) && 
        (cases[3].symbol == cases[5].symbol) && 
        (cases[3].symbol != ".") ) {
          this.winner == cases[3].symbol
          return cases[3].symbol
        }
    
    
    if( (cases[6].symbol == cases[7].symbol) && 
        (cases[6].symbol == cases[8].symbol) && 
        (cases[6].symbol != ".") ) {
          this.winner == cases[6].symbol
          return cases[6].symbol
        }
    
  }
  checkCol(cases = this.cases){
    // 0 3 6 // 1 4 7 // 2 5 8
    if( (cases[0].symbol == cases[3].symbol) && 
        (cases[0].symbol == cases[6].symbol) && 
        (cases[0].symbol != ".") ) {
          this.winner == cases[0].symbol
          return cases[0].symbol
        }
    

    if( (cases[1].symbol == cases[4].symbol) && 
        (cases[1].symbol == cases[7].symbol) && 
        (cases[1].symbol != ".") ) {
          this.winner == cases[1].symbol
          return cases[1].symbol
        }
    

    if( (cases[2].symbol == cases[5].symbol) && 
        (cases[2].symbol == cases[8].symbol) && 
        (cases[2].symbol != ".") ) {
          this.winner == cases[2].symbol
          return cases[2].symbol
        }
    
  }
  checkDiag(cases = this.cases) {
    // 0 2 4 // 2 5 6
    if( (cases[4].symbol == cases[0].symbol) && 
        (cases[4].symbol == cases[8].symbol) && 
        (cases[4].symbol != ".") ) {
          this.winner == cases[4].symbol
          return cases[4].symbol
        }
    

    if( (cases[4].symbol == cases[2].symbol) && 
        (cases[4].symbol == cases[6].symbol) && 
        (cases[4].symbol != ".") ) {
          this.winner == cases[4].symbol
          return cases[4].symbol
        }
    

  }  

  getAvailableMoves(){
    return this.cases.filter(boardCase => boardCase.symbol == '.')
  }

}