const input = document.querySelector("input");

const buttonCard = document.querySelector(".button-card");

function changer() {
  if (input.value === "") {
    return (buttonCard.textContent = "Valider");
  }
  buttonCard.textContent = input.value;
}

input.addEventListener("keyup", changer);
