const keyboardButtons = document.getElementById("keyboard-buttons");

const alphabetArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function displayKeyboard(arr) {
  for (const letter of arr) {
    let letterButton = document.createElement("button");
    letterButton.textContent = letter;
    letterButton.classList.add("unique-letter-button");
    keyboardButtons.append(letterButton);
    letterButton.addEventListener("click", playLetter);
  }
}
