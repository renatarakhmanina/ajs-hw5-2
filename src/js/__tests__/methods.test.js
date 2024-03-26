import Character from "../classes/Character";
import Bowerman from "../classes/Bowerman";

test("Character's properties should be changed correctly", () => {
  const warrior = new Character('Воин', 'Warrior');
  warrior.health = 50;
  warrior.levelUp();
  expect(warrior.level).toBe(2);
  expect(warrior.attack).toBe(0);
  expect(warrior.defence).toBe(0);
  expect(warrior.health).toBe(100);
  expect(() => warrior.levelUp()).not.toThrow();

  warrior.health = 0;
  expect(() => warrior.levelUp()).toThrow("You can't level up a dead character");
});

test("Bowerman's properties should be changed correctly", () => {
  const bowerman = new Bowerman('Лучник');
  bowerman.levelUp();
  expect(bowerman.level).toBe(2);
  expect(bowerman.attack).toBe(30);
  expect(bowerman.defence).toBe(30);
  expect(bowerman.health).toBe(100);

  bowerman.damage(20);
  expect(bowerman.health).toBe(86);
  bowerman.damage(150);
  expect(bowerman.health).toBe(0);
});