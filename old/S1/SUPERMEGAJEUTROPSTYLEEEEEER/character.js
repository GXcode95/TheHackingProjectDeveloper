class Character {

  constructor(name, human = false) {
    this.name =  name;
    this.regenPower = 20;

    this.status = "playing"
    this.healPower = 0
    this.baseArmor = 0
    this.armor = this.baseArmor
    this.human = human
  }


  chooseAction(target) {
    this.mana >= this.spellCost ? this.spell(target) : this.dealDamage(target)
  }
 
  getTarget = (players) => {
    //create an array with all alive ennemies
    let ennemies = players.filter(player => this.name != player.name)
    ennemies = ennemies.filter(ennemy => ennemy.status != "loser")
    //choose a random ennemy in ennemies
    console.log("                         ENNEMIES")
    console.table(ennemies)
    let target = ennemies[randomInt(ennemies.length)]
    return target
  }


  isAlive = () => {
    return this.status != "loser"
  }
  die() {
    console.log(this.name + " is dead !!! ")
    this.status = "loser"
  }
  reset = () => {
    this.dmg = this.baseDmg
    this.armor = this.baseArmor
    this.status = "playing"

  }



  dealDamage(target){
    console.log(`${this.name} attack  on ${target.name}`)
    target.takeDamage(this.dmg)
    if(target.status == "loser") this.regenMana()
  }
  takeDamage(dmg){
    if(this.status == "invicible") {
      console.log(`${this.name} is invicible for the turn, he takes 0 dmg`)
    } else {
      this.hp -= dmg - this.armor
      console.log(`${this.name} take ${dmg} dmg !`)

      this.hp >= 1 ? console.log(`${this.hp} HP left.`) : this.die()
    }
  }

  heal() {

    this.hp + this.healPower > this.baseHp ? this.hp = this.baseHp : this.hp += this.healPower
    console.log(`${this.name} : +${this.healPower} hp`)


  }
  regenMana() {

    this.mana + this.regenPower > this.baseMana ? this.mana = this.baseMana : this.mana += this.regenPower
    console.log(`${this.name} : +${this.regenPower} mana`)
    console.log(this)

  }
  looseMana() {
    this.mana - this.spellCost > 0 ? this.mana -= this.spellCost : this.mana = 0
    console.log(`${this.name} : -${this.spellCost} mana`)
  }

  boostDmg() {
    this.dmg += this.boostDmgPower
  }
  boostArmor() {
    this.armor += this.boostArmorPower
    console.log(`${this.name} : +${this.boostArmorPower} armor`)
  }
  

 

  
}
