/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
/*



  */

  function GameObject(createdAt, name, dimensions){
        this.createdAt = createdAt
        this.name = name
        this.dimensions = dimensions
    }
    GameObject.prototype.destroy = function(){
        return `${this.name} was removed from the game.`
    }


//*** */ CharacterStats turned into a Class***

 function CharacterStats(name, createdAt, dimensions, healthPoints){
         this.healthPoints = healthPoints
         this.createdAt = createdAt
         this.name = name
         this.dimensions = dimensions
     }
    CharacterStats.prototype = Object.create(GameObject.prototype);
     CharacterStats.prototype.takeDamage = function(){
        return `${this.name} took damage.`
     }
 




//***Humanoid turned into a Class */

function Humanoid (healthPoints, team, weapons, language){
 {  
      this.healthPoints = healthPoints
      this.team = team
      this.weapons = weapons
      this.language = language
  }
}

Humanoid.prototype = Object.create(CharacterStats.prototype)
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`
  }



// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game. 