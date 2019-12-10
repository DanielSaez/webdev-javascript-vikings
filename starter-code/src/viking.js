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
        
    }

}

// Saxon
class Saxon {}

// War
class War {}
