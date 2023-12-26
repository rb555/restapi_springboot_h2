import controls from '../../constants/controls';

//Helper functions
function checkAttack(fighter) {
    const attackChance = 0.8;
    return Math.random() < attackChance;
}

function checkDefend(fighter) {
    const defendChance = 0.5;
    return Math.random() < defendChance;
}

function getAttack(fighter) {
    return checkAttack(fighter) ? getDamage(fighter) : 0;
}

function getDefend(fighter) {
    return checkDefend(fighter) ? getDefense(fighter) : 0;
}

function getHitPower(fighter) {
    // return hit power
    return fighter.strength * 2;
}

function getBlockPower(fighter) {
    // return block power
    return fighter.defense * 1.5;
}


export async function fight(firstFighter, secondFighter) {
    return new Promise(resolve => {
        // resolve the promise with the winner when fight is over
        const fightRound = () => {
           
            const firstAttack = getAttack(firstFighter);
            const secondAttack = getAttack(secondFighter);

            const firstDefend = getDefend(firstFighter);
            const secondDefend = getDefend(secondFighter);

            if (firstAttack) {
                if (secondDefend) {
                    secondFighter.health -= Math.max(0, secondDefend - firstAttack);
                } else {
                    secondFighter.health -= firstAttack;
                }
            }

            if (secondAttack) {
                if (firstDefend) {
                    firstFighter.health -= Math.max(0, firstDefend - secondAttack);
                } else {
                    firstFighter.health -= secondAttack;
                }
            }
        };

        while (firstFighter.health > 0 && secondFighter.health > 0) {
            fightRound();
        }

        resolve(firstFighter.health > 0 ? firstFighter : secondFighter);
    });
}
           



export function getAttack(fighter) {
    return checkAttack(fighter) ? getDamage(fighter) : 0;
}

export function getDefend(fighter) {
    return checkDefend(fighter) ? getDefense(fighter) : 0;
}

export function getDamage(attacker, defender) {
    // return damage
    const hitPower = getHitPower(attacker);
    const blockPower = getBlockPower(defender);
    const damage = Math.max(0, hitPower - blockPower);

    return damage;
}


 
