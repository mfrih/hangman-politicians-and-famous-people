const startPage = document.getElementById("start-screen");
const gamePage = document.getElementById("game-screen");
const endPage = document.getElementById("end-screen");
const startButton = document.getElementById("start-button");
const nameToGuessElement = document.getElementById("name-to-guess");
const tryCounterElement = document.getElementById("try-counter");
const hintElement = document.getElementById("hint");
const hintImage = document.querySelector(".hint-gif");
const gameResultElement = document.getElementById("game-result");
const characterPicture = document.getElementById("character-pic");
const characterRevealSentence = document.getElementById("character-reveal");
const restartButton = document.getElementById("restart-button");
let chosenCharacter = undefined;
let hiddenCharacterArr = undefined;
let tryCounter = 5;

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

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
  //   const chosenCharacter = characters[characterIndex];
  return chosenCharacter[0];
  //   return characters[characterIndex];
}

function generateLetterCells(name) {
  let characterArray = name.split("");
  for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i] === " ") {
      characterArray[i] = " 💸💸💸 ";
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
  if (tryCounter <= 5 && tryCounter > 1) {
    tryCounterSentence.textContent = `${tryCounter} essais restants`;
  }
  if (tryCounter === 1) {
    tryCounterSentence.textContent = `${tryCounter} essai restant`;
  }
  tryCounterSentence.classList.add("try-counter-sentence", "shake-horizontal");
  //   tryCounterSentence.classList.add("shake-horizontal");
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
    if (tryCounter <= 4 && tryCounter > 0) {
      hintElement.textContent = chosenCharacter.hints[tryCounter - 1];
      //   hintElement.classList.add("slide-in-left");
    }
    if (tryCounter <= 3 && tryCounter > 1) {
      hintImage.src = "./images/simpsons-mayor-dollar-sack.gif";
    }
    if (tryCounter === 1) {
      hintImage.src = "./images/mayor-quimby-screwed.gif";
    }

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
  gameResultElement.textContent = `Bravooooo. Quel jugement implacable pour ${chosenCharacter.name} !`;
  characterPicture.src = chosenCharacter.photoWin;
  characterRevealSentence.textContent = `Grâce à toi, ${chosenCharacter.nickname} paie enfin pour ses actes . On sait que l'on peut faire confiance à la justice de ce pays.`;
}

function showGameOverScreen() {
  gamePage.classList.add("hidden");
  endPage.classList.remove("hidden");
  gameResultElement.textContent = `Oh noooon, comment as-tu pu laisser ${chosenCharacter.name} s'en sortir aussi facilement ?`;
  characterPicture.src = chosenCharacter.photoLoose;
  characterRevealSentence.textContent = `À cause de toi, ${chosenCharacter.nickname} peut aller faire la fête à Ibiza en toute impunité 🏝️`;
}

function restartGame() {
  endPage.classList.add("hidden");
  gamePage.classList.remove("hidden");
  chosenCharacter = undefined;
  hiddenCharacterArr = undefined;
  tryCounter = 5;
  nameToGuessElement.innerHTML = "";
  hintElement.textContent =
    "Je refuse de vous parler espèce de justiciers. Je suis INNOCENT !!!";
  hintImage.src = "./images/mayor-quimby-the-simpsons.gif";
  tryCounterElement.innerHTML = "";
  keyboardButtons.innerHTML = "";
  startGame();
}
