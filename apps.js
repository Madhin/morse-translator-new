const input = document.querySelector("#phrase");
const button = document.querySelector(".btn");
const output = document.querySelector(".translation");
const inputText = input.value;

const translateToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
};

const morseConversion = () => {
  const inputText = input.value;
  const upperCase = inputText.toUpperCase().split("");
  const newArr = upperCase.map((letter) => {
    return translateToMorse[letter];
  });
  console.log(newArr);
  const string = newArr.toString();
  console.log(string);
  const noCommas = string.replace(/,/g, "");
  output.innerHTML = noCommas;
};

const validate = () => {
  if ((output.innerHTML = "")) {
    alert("Invalid Input");
  } else {
    morseConversion();
  }
};

button.addEventListener("click", validate);

//const newArr = upperCase.map((letter) => {
//return "coach" + letter;
//});
//console.log(newArr);
