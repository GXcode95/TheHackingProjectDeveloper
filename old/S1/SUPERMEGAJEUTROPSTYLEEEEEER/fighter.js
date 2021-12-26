
class Fighter extends Character {
  constructor(name, status) {
    super(name, status)
    this.baseHp = 13
    this.hp = this.baseHp
    this.baseMana = 80
    this.mana = this.baseMana;
    this.baseDmg = 5
    this.dmg = this.baseDmg
    this.boostDmgPower = 2
    this.boostArmorPower = 1
    this.spellCost = 20
    this.baseArmor = 1
    this.armor = this.baseArmor
    this.init = 4
  }
  
  spell = (target) => {
    this.boostDmg()
    this.boostArmor()
    this.looseMana()
    this.dealDamage(target)

  }
  
  //this.armor -= this.boostArmor // reset armor every turn


}