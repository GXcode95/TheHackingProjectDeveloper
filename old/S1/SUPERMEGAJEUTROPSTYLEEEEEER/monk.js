class Monk extends Character {
  constructor(name, status, armor, baseArmor) {
    super(name, status, armor, baseArmor)
    this.baseHp = 12;
    this.hp = this.baseHp
    this.baseMana = 200;
    this.mana = this.baseMana;
    this.baseDmg = 3;
    this.dmg = this.baseDmg;
    this.spellCost = 25
    this.healPower = 10
    this.init = 2
  }

  spell = (target) => {
    this.isFullLife() ? this.dealDamage(target): this.heal()
    this.looseMana()
  }
  isFullLife = () => {
    return (this.hp == this.baseHp)
  }
  
}