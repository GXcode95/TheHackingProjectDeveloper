class Board {
  constructor(players) {
    this.players = players
  }

  displayBoard = () => {
    this.boardBox = document.querySelector('main')
    this.cleanBoard();
    // create board
    this.createPlayerBox()
    this.createFightBox()
    this.players.filter(player=> player.status != "loser").forEach(player => {
      this.insertPlayerBox(player)
    })

  }

  cleanBoard = () => {
    this.boardBox.innerHTML = ""
  }

  createFightBox = () => {
    let fightBox = document.createElement('div')
    
    // let attackerBox = document.createElement('div')
    // attackerBox.classList.add('attacker-box')
    // fightBox.appendChild(attackerBox)

    // let resumeBox = document.createElement('div')
    // resumeBox.classList.add('resume-box')
    // fightBox.appendChild(resumeBox)

    // let defender = document.createElement('div')
    // defender.classList.add('defender-box')
    // fightBox.appendChild(defender)
    
    fightBox.classList.add('fight-box')
    this.boardBox.appendChild(fightBox)
    this.fightBox = fightBox
    

  }
  
  createPlayerBox = () => {
    let playerBox = document.createElement('div')
    playerBox.classList.add('player-box')
    this.boardBox.appendChild(playerBox)
    this.playerBox =  playerBox
  }

  insertPlayerBox = (player) => {
    let type = player.constructor.name.toLowerCase()
    this.playerBox.insertAdjacentHTML('beforeEnd', `<div class="flex-column flex-center"><img class="small-img" src="img/${type}.png" alt="${type}"><span>${player.name} ${player.hp}HP</span></div>`)
  }
  insertWinners = (winners) => {
    let box = document.querySelector(`.fight-box`)
    box.insertAdjacentHTML("beforeEnd", `<div class="fs-7">Winners</div>`)
    winners.forEach(winner => {
      let type = winner.constructor.name.toLowerCase()
      box.insertAdjacentHTML('beforeEnd', `<div class="flex-column flex-center"><img class="medium-img" src="img/${type}.png" alt="${type}"><span>${winner.name} ${winner.hp}HP</span></div>`)
    })
  }

}
