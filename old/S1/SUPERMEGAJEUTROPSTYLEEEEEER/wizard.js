class Wizard extends Character {
  constructor(name, status, armor, baseArmor) {
    super(name, status, armor, baseArmor)
    this.baseHp = 20
    this.hp = this.baseHp
    this.baseMana = 200
    this.mana = this.baseMana
    this.baseDmg = 2
    this.dmg = this.baseDmg
    this.spellCost = 25
    this.boostDmgPower = 7
    this.init = 3
  }

  spell = (target) => {
    this.boostDmg()
    this.looseMana()
    this.dealDamage(target)
  }

  
}