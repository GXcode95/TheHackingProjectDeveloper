class Berzerker extends Character {
  constructor(name, status, armor, baseArmor) {
    super(name, status, armor, baseArmor)
    this.baseHp = 18
    this.hp = this.baseHp
    this.baseMana = 0
    this.mana = this.baseMana
    this.baseDmg = 4
    this.dmg = this.baseDmg
    this.spellCost = 0
    this.boostDmgPower = 2
    this.init = 5
  }

  spell = (target) => {
    this.boostDmg()
    this.boostBaseDmg()
    this.looseMana()
    this.dealDamage(target)
  }
  boostBaseDmg = () => {
    this.baseDmg += this.boostDmgPower
    console.log(`${this.name} : +${this.boostDmgPower} dmg`)

  }

}