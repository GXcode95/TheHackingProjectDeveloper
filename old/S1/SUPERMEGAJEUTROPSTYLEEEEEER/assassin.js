class Assassin extends Character {
  constructor(name, status, armor, baseArmor) {
    super(name, status, armor, baseArmor)
    this.baseHp = 12
    this.hp = this.baseHp
    this.baseMana = 12
    this.mana = this.baseMana
    this.baseDmg = 6
    this.dmg = this.baseDmg
    this.spellCost = 6
    this.boostDmgPower = 6
    this.init = 6
  }

  spell = (target) => {
    this.boostDmg()
    this.looseMana()
    this.dealDamage(target)
    this.invicibility()
  }
  invicibility  = () => {
    this.status = "invicible"
    console.log(this.name + " is invicible for 1 turn")
  }
}