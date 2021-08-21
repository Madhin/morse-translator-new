const input1 = document.querySelector("#phrase");
const button1 = document.querySelector(".btn1");
const output1 = document.querySelector(".engTranslation");
const inputText1 = input1.value;

const input2 = document.querySelector("#morse");
const button2 = document.querySelector(".btn2");
const output2 = document.querySelector(".morseTranslation");
const inputText2 = input2.value;

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


const translateToEng = {
  '.-':     'A',
  '-...':   'B',
  '-.-.':   'C',
  '-..':    'D',
  '.':      'E',
  '..-.':   'F',
  '--.':    'G',
  '....':   'H',
  '..':     'I',
  '.---':   'J',
  '-.-':    'K',
  '.-..':   'L',
  '--':     'M',
  '-.':     'N',
  '---':    'O',
  '.--.':   'P',
  '--.-':   'Q',
  '.-.':    'R',
  '...':    'S',
  '-':      'T',
  '..-':    'U',
  '...-':   'V',
  '.--':    'W',
  '-..-':   'X',
  '-.--':   'Y',
  '--..':   'Z',
  '/': " ",
  '.----':  1,
  '..---':  2,
  '...--':  3,
  '....-':  4,
  '.....':  5,
  '-....':  6,
  '--...':  7,
  '---..':  8,
  '----.':  9,
  '-----':  0,
}

const morseConversion = () => {
  const inputText1 = input1.value;
  const upperCase = inputText1.toUpperCase().split("");
  const newArr = upperCase.map((letter) => {
    return translateToMorse[letter];
  });
  console.log(newArr);
  const string = newArr.toString();
  console.log(string);
  const noCommas = string.replace(/,/g, "");
  output1.innerHTML = noCommas;
};

const englishConversion = () => {
  const inputText2 = input2.value;
  const morseInput = inputText2.split(" ")
  console.log(morseInput);
  const newArr2 = morseInput.map((a) => {
    return translateToEng[a];
  });
  console.log(newArr2);
  const string = newArr2.toString().toLowerCase();
  console.log(string);
  output2.innerHTML = string;
}

const validate1 = () => {
  if ((output1.innerHTML = "")) {
    alert("Invalid Input");
  } else {
    morseConversion();
  }
};

const validate2 = () => {
  if ((output2.innerHTML = "")) {
    alert("Invalid Input");
  } else {
    englishConversion();
  }
};


button1.addEventListener("click", validate1);
button2.addEventListener("click", validate2)

//const newArr = upperCase.map((letter) => {
//return "coach" + letter;
//});
//console.log(newArr);
