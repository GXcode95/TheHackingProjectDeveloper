class Paladin extends Character {
  constructor(name, status5) {
    super(name, status)
    this.baseHp = 15;
    this.hp = this.baseHp;
    this.baseMana = 160;
    this.mana = this.baseMana;
    this.baseDmg = 3;
    this.dmg = this.baseDmg;
    this.spellCost = 40
    this.healPower = 3
    this.boostDmgPower = 1
    this.baseArmor = 2
    this.armor = this.baseArmor
    this.init =1
  }


  spell = (target) => {
    //heal and attack
    this.boostDmg()    
    this.heal()
    this.looseMana()
    this.dealDamage(target)
  }


}
