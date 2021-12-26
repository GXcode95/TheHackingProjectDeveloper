const randomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const main = () => {


  const game = new Game()

    game.launchGame()
  }
main()





/** COMMENT / UNCOMMENT FOR TEST EQUILIBRATE **/
//   const winners = game.winners.map(winner => winner.name)
//   return winners
// }


// let winners =[]
// for(let i = 0; i < 500; i++) {
//   main().forEach(winner => winners.push(winner))

// }



// const names = ["Grace",
//   "Ulder",
//   "Moana",
//   "Draven",
//   "Carl",
//   "Jean",
//   "Xavier"
// ]

// console.log("                               VICTOIRE TOTALES")
// names.forEach(name => {
//   console.log("---------------------------------------------------------------")
//   console.log(name + " wins " +  winners.filter(winner => winner == name).length + " times.")
// })
// console.log("---------------------------------------------------------------")

