const ATTACK_VALUE = 10; //global value which is hardcoded so use this naming convention
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE); //this function will update the ui health bars
  currentMonsterHealth -= damage;

  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you lost");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw");
  }
}

attackBtn.addEventListener("click", attackHandler);
