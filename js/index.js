const startPage = document.getElementById("start-screen");
const gamePage = document.getElementById("game-screen");
const endPage = document.getElementById("end-screen");
const startButton = document.getElementById("start-button");
const nameToGuessElement = document.getElementById("name-to-guess");
const tryCounterElement = document.getElementById("try-counter");
let chosenCharacter = undefined;
let hiddenCharacterArr = undefined;
let tryCounter = 5;

startButton.addEventListener("click", startGame);

function startGame() {
  startPage.classList.add("hidden");
  gamePage.classList.remove("hidden");
  chosenCharacter = pickCharacter();
  //   console.log(chosenCharacter);
  hiddenCharacterArr = generateLetterCells(chosenCharacter.name);
  //   console.log(chosenCharacter);
  displayHiddenName(hiddenCharacterArr);
  displayKeyboard(alphabetArray);
  displayTryCounter(tryCounter);
}

function pickCharacter() {
  const characterIndex = Math.floor(Math.random() * characters.length);
  const chosenCharacter = characters.splice(characterIndex, 1);
  return chosenCharacter[0];
}

function generateLetterCells(name) {
  let characterArray = name.split("");
  for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i] === " ") {
      characterArray[i] = " ";
    } else {
      characterArray[i] = "_";
    }
  }
  return characterArray;
}

function displayHiddenName(arr) {
  for (const element of arr) {
    let spanHiddenLetter = document.createElement("span");
    spanHiddenLetter.textContent = element;
    nameToGuessElement.append(spanHiddenLetter);
  }
}

function displayTryCounter() {
  let tryCounterSentence = document.createElement("p");
  tryCounterSentence.textContent = `Il vous reste ${tryCounter} essais avant que je ne m'enfuis avec l'argent 💸`;
  tryCounterSentence.classList.add("try-counter-sentence");
  tryCounterElement.append(tryCounterSentence);
}

function sweepHiddenName() {
  nameToGuessElement.textContent = "";
}

function playLetter(event) {
  if (chosenCharacter.name.includes(event.target.textContent)) {
    for (let i = 0; i < chosenCharacter.name.length; i++) {
      if (chosenCharacter.name[i] === event.target.textContent) {
        hiddenCharacterArr[i] = event.target.textContent;
      }
    }
    if (!hiddenCharacterArr.includes("_")) {
      showVictoryScreen();
    }
  } else {
    tryCounter--;
    if (tryCounter === 0) {
      showGameOverScreen();
    }
    tryCounterElement.textContent = "";
    displayTryCounter();
  }
  event.target.setAttribute("disabled", "");
  sweepHiddenName();
  displayHiddenName(hiddenCharacterArr);
}

function showVictoryScreen() {
  gamePage.classList.add("hidden");
  endPage.classList.remove("hidden");
  console.log("Youpie t'as gagné");
}

function showGameOverScreen() {
  gamePage.classList.add("hidden");
  endPage.classList.remove("hidden");
  console.log("Youpie t'as perdu");
}
