"use strict";

var input1 = document.querySelector("#phrase");
var button = document.querySelector(".btn");
var output = document.querySelector(".translation");
var inputText1 = input1.value;
var translateToMorse = {
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
  0: "-----"
};

var morseConversion = function morseConversion() {
  var inputText1 = input1.value;
  var upperCase = inputText1.toUpperCase().split("");
  var newArr = upperCase.map(function (letter) {
    return translateToMorse[letter];
  });
  console.log(newArr);
  var string = newArr.toString();
  console.log(string);
  var noCommas = string.replace(/,/g, "");
  output.innerHTML = noCommas;
};

var validate = function validate() {
  if (output.innerHTML = "") {
    alert("Invalid Input");
  } else {
    morseConversion();
  }
};

button.addEventListener("click", validate); //const newArr = upperCase.map((letter) => {
//return "coach" + letter;
//});
//console.log(newArr);