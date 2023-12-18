const startPage = document.getElementById("start-screen");
const gamePage = document.getElementById("game-screen");
const endPage = document.getElementById("end-screen");
const startButton = document.getElementById("start-button");
const nameToGuessElement = document.getElementById("name-to-guess");

startButton.addEventListener("click", startGame);

function startGame() {
  startPage.classList.add("hidden");
  gamePage.classList.remove("hidden");
  const chosenCharacter = pickCharacter();
  //   console.log(chosenCharacter);
  const hiddenCharacter = generateLetterCells(chosenCharacter.name);
  //   console.log(chosenCharacter);
  displayName(hiddenCharacter);
  displayKeyboard(alphabetArray);
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

function displayName(arr) {
  for (const element of arr) {
    let spanHiddenLetter = document.createElement("span");
    spanHiddenLetter.textContent = element;
    nameToGuessElement.append(spanHiddenLetter);
  }
}
