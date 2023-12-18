const startPage = document.getElementById("start-screen");
const gamePage = document.getElementById("game-screen");
const endPage = document.getElementById("end-screen");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
  startPage.classList.add("hidden");
  gamePage.classList.remove("hidden");
}
