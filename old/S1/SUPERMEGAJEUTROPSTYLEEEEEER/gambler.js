class Gambler extends Character {
  constructor(name, status, armor, baseArmor) {
    super(name, status, armor, baseArmor)
    this.baseHp = 30
    this.hp = this.baseHp
    this.baseMana = 15
    this.mana = this.baseMana
    this.baseDmg = 1
    this.dmg = this.baseDmg
    this.spellCost = 3
    this.boostDmg = 10
    this.init = randomInt(5) + 1
  }

  spell = (target) => {
    this.multiplyDmg()
    this.looseMana()
    this.dealDamage(target)
  }

  multiplyDmg = () => {
    this.dmg = randomInt(this.boostDmg)
  }
}