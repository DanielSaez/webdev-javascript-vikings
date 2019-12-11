// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(Damage){
        this.health = this.health - Damage;
    }
    
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name= name;
    }
    receiveDamage(Damage){
        this.health = this.health - Damage;
        if (this.health > 0){
            return `${this.name} has received ${Damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength)
    super(health, str)
}

// War
class War {}
