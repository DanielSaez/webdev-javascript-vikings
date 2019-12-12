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
class Saxon extends Soldier {
    constructor(health, strength) {
    super(health, strength)
    }
    receiveDamage(hitHealth){
        this.health = this.health - hitHealth
        if(this.health > 0){
            return "A Saxon has received " + hitHealth + " points of damage"
        }
        else{
            return "A Saxon has died in combat"
        }
    }
}
// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let randomSaxon = Math.floor(Math.random(this.saxonArmy.length) * 1);
        let randomViking = Math.floor(Math.random(this.vikingArmy.length) * 1);
        let trueViking = this.vikingArmy[randomViking]
        let trueSaxon = this.saxonArmy[randomSaxon]
        if((trueSaxon.health - trueViking.strength) <= 0){
            this.saxonArmy.splice(randomSaxon,1)
        }
        return trueSaxon.receiveDamage(trueViking.strength)
        
    }
    saxonAttack(){
        let randomSaxon = Math.floor(Math.random(this.saxonArmy.length) * 1);
        let randomViking = Math.floor(Math.random(this.vikingArmy.length) * 1);
        let trueViking = this.vikingArmy[randomViking]
        let trueSaxon = this.saxonArmy[randomSaxon]
        if((trueViking.health - trueSaxon.strength) <= 0){
            this.vikingArmy.splice(randomViking,1)
        }
        return trueViking.receiveDamage(trueSaxon.strength) 
    }


    showStatus(){
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
        }
        else if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }

        else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
        }
        }
}
