import Character from "../classes/Character";
import Bowerman from "../classes/Bowerman";
import Swordsman from "../classes/Swordsman";
import Magician from "../classes/Magician";
import Undead from "../classes/Undead";
import Zombie from "../classes/Zombie";
import Daemon from "../classes/Daemon";

test('Character class should be defined', () => {
  expect(Character).toBeDefined();
});

test('Bowerman class should be defined', () => {
  expect(Bowerman).toBeDefined();
});

test('Swordsman class should be defined', () => {
  expect(Swordsman).toBeDefined();
});

test('Magician class should be defined', () => {
  expect(Magician).toBeDefined();
});

test('Undead class should be defined', () => {
  expect(Undead).toBeDefined();
});

test('Zombie class should be defined', () => {
  expect(Zombie).toBeDefined();
});

test('Daemon class should be defined', () => {
  expect(Daemon).toBeDefined();
});


test('Character class should have correct properties', () => {
  const character = new Character('Персонаж', 'Warrior');
  expect(character.name).toBe('Персонаж');
  expect(character.type).toBe('Warrior');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(0);
  expect(character.defence).toBe(0);

  expect(() => new Character('I', 'Warrior')).toThrow('Name length should be between 2 and 10 characters');
  expect(() => new Character('Daenerys Stormborn of House Targaryen', 'Warrior')).toThrow('Name length should be between 2 and 10 characters');
  expect(() => new Character('Loki', 'Warrior')).not.toThrow();
});

test('Bowerman class should have correct properties', () => {
  const bowerman = new Bowerman('Лучник');
  expect(bowerman.name).toBe('Лучник');
  expect(bowerman.type).toBe('Bowerman');
  expect(bowerman.health).toBe(100);
  expect(bowerman.level).toBe(1);
  expect(bowerman.attack).toBe(25);
  expect(bowerman.defence).toBe(25);
});

test('Swordsman class should have correct properties', () => {
  const swordsman = new Swordsman('Мечник');
  expect(swordsman.name).toBe('Мечник');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('Magician class should have correct properties', () => {
  const magician = new Magician('Маг');
  expect(magician.name).toBe('Маг');
  expect(magician.type).toBe('Magician');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('Undead class should have correct properties', () => {
  const undead = new Undead('Немертвый');
  expect(undead.name).toBe('Немертвый');
  expect(undead.type).toBe('Undead');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('Zombie class should have correct properties', () => {
  const zombie = new Zombie('Зомби');
  expect(zombie.name).toBe('Зомби');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});

test('Daemon class should have correct properties', () => {
  const daemon = new Daemon('Демон');
  expect(daemon.name).toBe('Демон');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});