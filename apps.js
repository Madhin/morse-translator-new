const input = document.querySelector("#phrase");
const button = document.querySelector(".btn");
const output = document.querySelector(".translation");

const morseCode = {
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
};

const convertToMorse = () => {
  const string = input.value;
  const upperCase = string.toUpperCase().split("");
  const newArr = upperCase.map((letter) => {
    return morseCode[letter];
  });
  console.log(newArr.join());
};

button.addEventListener("click", convertToMorse);

//const newArr = upperCase.map((letter) => {
//return "coach" + letter;
//});
//console.log(newArr);
