const ATTACK_VALUE = 10; //global value which is hardcoded so use this naming convention
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  //reinitializing the variables
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth; //player health before the monster attacks him

  /* this function is for monster attack only */
  /*- the monster will hit us with ever button click ,
     either we clicked on attack ,strong attack or heal button
     - since the monster ill hit us ,even though we healed ourselves
     we could theoretically be dead , so we need to check the win condition 
     not the player because he dealt no damge when he pressed the heal button
     
     */
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth; // we reset player health to value before monster hits him
    setPlayerHealth(initialPlayerHealth); //updates the ui health bar
    alert("you would be dead but the bonus life saved you");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you lost");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw");
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  /*  this function is for the player attack and at the end we call the function of the monster attack and to check win conditions*/
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  //action
  const damage = dealMonsterDamage(maxDamage); //this function will update the ui health bars
  currentMonsterHealth -= damage;
  //reaction
  endRound();
}

function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("you can't heal to more than your max initial health");
    healValue = chosenMaxLife - currentPlayerHealth; //we heal the player but not above inital max life
  } else {
    healValue = HEAL_VALUE;
  }
  //action
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;

  //reaction
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
