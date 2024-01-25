const keypad = document.querySelector(".keypadContent");
const keypadDisplay = document.querySelector(".keypad");
const deleteButton = document.querySelector("#delete");
const resetButton = document.querySelector("#reset");
const solveButton = document.querySelector("#equal");

deleteButton.addEventListener("click", deleteLastCharacter);
resetButton.addEventListener("click", resetKeypad);
solveButton.addEventListener("click", evaluateExpression);

function appendToDisplay(value) {
  keypad.textContent += value;
  updateKeypadDisplayPadding();
}

function deleteLastCharacter() {
  keypad.textContent = keypad.textContent.slice(0, -1);
  updateKeypadDisplayPadding();
}

function resetKeypad() {
  keypad.textContent = "";
  updateKeypadDisplayPadding();
}

function evaluateExpression() {
  const formattedNumber = eval(keypad.textContent);
  const result = Number.isInteger(formattedNumber)
    ? formattedNumber
    : formattedNumber.toFixed(2);

  // Use toLocaleString to format the number
  const formattedResult = result.toLocaleString();

  keypad.textContent = formattedResult;
}

function updateKeypadDisplayPadding() {
  keypadDisplay.style.paddingBlock = keypad.textContent ? "2rem" : "3.5rem";
}

// Keyboard event listener
document.body.addEventListener("keydown", handleKeyboardInput);

function handleKeyboardInput(e) {
  const allowedKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
  ];

  if (allowedKeys.includes(e.key)) {
    keypad.textContent += e.key;
  } else if (e.key === "Backspace" || e.key === "Delete") {
    deleteLastCharacter();
  } else if (e.key === "Enter") {
    evaluateExpression();
  } else {
    keypad.textContent = "Error";
  }

  updateKeypadDisplayPadding();
}

// 3 State Toggle
const toggleStates = document.querySelectorAll(".toggle-state");
const circle = document.querySelector(".circle");

toggleStates.forEach((button, index) => {
  button.addEventListener("click", () => {
    updateToggleState(index);
  });
});

function updateToggleState(clickedIndex) {
  const percentage = Math.ceil((100 / toggleStates.length) * clickedIndex);

  circle.style.left = clickedIndex === 0 ? "0%" : `${percentage}%`;
  circle.style.marginLeft = clickedIndex === 0 ? "0.3rem" : "0";
  circle.style.marginRight =
    clickedIndex === toggleStates.length - 1 ? "0" : "";

  document.body.className =
    clickedIndex === toggleStates.length - 1
      ? "theme3"
      : clickedIndex !== 0
      ? "theme2"
      : "";
}
