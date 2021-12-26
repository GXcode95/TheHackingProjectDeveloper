import { createRequire } from 'module' // recherche les modules dans nodes/modules
const require = createRequire(import.meta.url);

export class Message {
  constructor(game) {
    this.game = game
    this.inquirer = require('inquirer') // Used to handle the output in node
  }
//$ Start
  startMessage(){
    console.log("  -----  LE JEU COMMENCE  -----")
  }
  
//$ Questions
  askPlayer() {
    let symbols = this.game.board.symbols
      const questions = [
        {
          type: 'input',
          name: 'name',
          message: "Quel est votre nom?\n>",
          default: "Xavier",
          validate(value){
            const pass = value.length > 0
            if(pass) return true

            return "Veuillez entrer un nom"
          }
        },
        {
          type: 'input',
          name: 'symbol',
          message: `Choisisser un symbol? ${symbols[0]} | ${symbols[1]}\n>`,
          default: "X",
          validate(value) {
            const pass = (value == "X" || value == "O")
            if (pass) return true
            
            return "Choisissez un Symbol valide"
            
          }
        }
      ]

    return new Promise(resolve => {
        resolve(  
          this.inquirer.prompt(questions).then(answers => {
            console.log(`\n  Ok ${answers['name']}, c'est partie !`)
            this.game.newPlayer(answers['name'], answers['symbol'])
          })
        )
    });
  }
  askMove(player) {
      const possibilities = this.game.board.cases.filter(boardCase => boardCase.symbol == '.')
      const questions = [
        {
          type: 'input',
          name: 'position',
          message: "Ou Voulez vous jouer?\n           7 8 9 \n           4 5 6\n           1 2 3\n >",
          validate(value) {
            for (let possibility of possibilities ) {
              if (possibility.position == value)  return true
            }
            return `Veuillez choisir un coup valide `
          }
        },
      ]
    return new Promise(resolve => {
        resolve(  
          this.inquirer.prompt(questions).then(answers => {
            console.log(`\n  ${player.name} à joué en ${answers['position']} !`)
            return answers[`position`]
          })
        )
    });
  }
  askReMatch() {
    const questions = [
      {
        type: 'input',
        name: 'reMatch',
        message: "Voulez vous rejouer?\n>",
        validate(value) {
            value = value.toUpperCase()
            if (value == "Y" || value == "YES" || value == "N" || value == "NO") return true
          return `Je n'ai pas compris votre choix`
        }
      },
    ]
  return new Promise(resolve => {
      resolve(  
        this.inquirer.prompt(questions).then(answers => {
          if (answers['reMatch'].toUpperCase() == 'Y' || answers['reMatch'].toUpperCase() == 'YES') return true
          if (answers['reMatch'].toUpperCase() == 'N' || answers['reMatch'].toUpperCase() == 'NO') return false
        })
      )
  });
  }

//$ EndGame
  winnerPlayer() {
    console.log("   ********************")
    console.log("   **  player Win !  **")
    console.log("   ********************")
  }  
  winnerIA(){
    console.log("   *****************")
    console.log("   **  IA Win !  **")
    console.log("   *****************")
  }
  draw(){
    console.log("   *********************")
    console.log("   **  It's a Draw !  **")
    console.log("   *********************")
  }
  endMessage(){
    console.log("   -----  GAME OVER  -----")
  }
}