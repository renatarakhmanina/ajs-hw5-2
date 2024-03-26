export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length should be between 2 and 10 characters');
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    this.level += 1;
    this.attack = 1.2 * this.attack;
    this.defence = 1.2 * this.defence;

    if (this.health > 0) {
      this.health = 100;
    } else {
      throw new Error("You can't level up a dead character");
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}