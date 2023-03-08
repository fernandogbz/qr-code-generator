const container = document.querySelector(".container");

const userInput = document.getElementById("userInput");

const submitBtn = document.getElementById("submit");

const downloadBtn = document.getElementById("download");

const sizeOptions = document.querySelector(".sizeOptions");

const BGColor = document.getElementById("BGColor");

const FGColor = document.getElementById("FGColor");

let QRCode;

let sizeChoice, BGColorChoice, FGColorChoice;

// Set size
sizeOptions.addEventListener("change", () => {
  sizeChoice = sizeOptions.value;
});

// Set background color
BGColor.addEventListener("input", () => {
  BGColorChoice = BGColor.value;
});

